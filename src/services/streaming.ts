import { StreamingData, ChatPersonaIdentifier } from '@/types';

export interface StreamChatParams {
    baseUrl: string;
    sessionId?: string;
    message: string;
    persona?: string | ChatPersonaIdentifier;
    authToken: string;
    authType: 'apiKey' | 'bearer';
    maxTokens?: number;
    abortSignal?: AbortSignal;
    // Per-browser id for per-visitor rate limiting. Only sent as a header in
    // apiKey mode - bearer/JWT mode carries it as a claim baked in when the
    // token was minted (see getToken in WidgetConfig), not per-request.
    clientId?: string;
    // Arbitrary extra fields merged into the request body verbatim (see
    // WidgetConfig.extraContext) - e.g. a host app's own RAG-grounding
    // hints. Sent on every completion/continuation call, unlike `persona`
    // which only applies to the first message of a session.
    extraContext?: Record<string, unknown>;
}



/**
 * Parse SSE stream and yield StreamingData events
 */
async function* parseSSEStream(reader: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<StreamingData, void, unknown> {
  const decoder = new TextDecoder();
  let buffer = '';
  let eventCount = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      
      if (done) {
        // Process any remaining buffer
        if (buffer.trim()) {
          const events = parseSSEBuffer(buffer);
          for (const event of events) {
              eventCount += 1;
            yield event;
          }
        }
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      
      // Keep the last incomplete line in buffer
      buffer = lines.pop() || '';

      // Process complete lines
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6).trim();
          if (data) {
            try {
              const parsed = JSON.parse(data) as StreamingData;
              eventCount += 1;
              yield parsed;
            } catch (e) {
              console.error('Failed to parse SSE data:', data, e);
            }
          }
        }
      }
    }
  } finally {
    reader.releaseLock();
    console.log(`parseSSEStream: yielded ${eventCount} events`)
  }
}

/**
 * Parse SSE buffer for complete events
 */
function parseSSEBuffer(buffer: string): StreamingData[] {
  const events: StreamingData[] = [];
  const lines = buffer.split('\n');
  
  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const data = line.slice(6).trim();
      if (data) {
        try {
          events.push(JSON.parse(data) as StreamingData);
        } catch (e) {
          console.error('Failed to parse SSE data:', data, e);
        }
      }
    }
  }
  
  return events;
}

/**
 * Stream chat completion (new conversation)
 */
export async function* streamChat(
  params: StreamChatParams
): AsyncGenerator<StreamingData, void, unknown> {
  const { baseUrl, message, sessionId, persona, authToken, authType, maxTokens, clientId, extraContext, abortSignal } = params;

  // Build headers
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'text/event-stream',
  };

  // console.log(`streamChat: using token type: ${authType}, sessionId: ${sessionId}`)
  // Sent regardless of authType: in bearer/JWT mode this is a fallback for
  // when the site's own get_token backend doesn't forward client_id into
  // the JWT claim - see chat_api_key_middleware's client_id resolution.
  if (clientId) {
    headers['X-Client-Id'] = clientId;
  }
  // Set authentication header based on authType
  if (authType === 'apiKey') {
    headers['X-API-Key'] = authToken;
  } else {
    headers['Authorization'] = `Bearer ${authToken}`;
  }

  // console.log(`sessionId: ${sessionId}`)

  // Build request body
  const body: Record<string, unknown> = {
    message,
  };
  
  if (!sessionId && (authType === 'apiKey') && persona) {
      body.persona = typeof persona === 'string' ? { alias: persona } : persona;
  }

  if (sessionId) {
      body.session = sessionId;
  }

  if (maxTokens) {
    body.max_tokens = maxTokens;
  }

  if (extraContext) {
    Object.assign(body, extraContext);
  }

  let path;
  if (sessionId) {
      path = '/api/chat/continuation/stream'
  } else {
      path = '/api/chat/completion/stream'
  }

  // console.log(`sending request to ${baseUrl}${path} with body: ${JSON.stringify(body)}`);
  // Make fetch request
  const response = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
    signal: abortSignal,
  });

  if (!response.ok) {
    let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
    try {
      console.error(`error from completion: ${response.status} : ${response.statusText}`)
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // Ignore JSON parse errors
    }
    
    yield {
      type: 'error',
      message: `${response.status} ${errorMessage}`, // Include status code for error detection
    };
    return;
  }

  if (!response.body) {
    yield {
      type: 'error',
      message: 'No response body received',
    };
    return;
  }

  // Parse SSE stream
  const reader = response.body.getReader();
  yield* parseSSEStream(reader);
}
