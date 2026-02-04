import { StreamingData } from '../types';

export interface StreamChatCompletionParams {
  baseUrl: string;
  message: string;
  persona?: string;
  authToken: string;
  authType: 'apiKey' | 'bearer';
  maxTokens?: number;
  abortSignal?: AbortSignal;
}

export interface StreamChatContinuationParams {
  baseUrl: string;
  sessionId: string;
  message: string;
  authToken: string;
  authType: 'apiKey' | 'bearer';
  maxTokens?: number;
  abortSignal?: AbortSignal;
}

/**
 * Parse SSE stream and yield StreamingData events
 */
async function* parseSSEStream(reader: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<StreamingData, void, unknown> {
  const decoder = new TextDecoder();
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      
      if (done) {
        // Process any remaining buffer
        if (buffer.trim()) {
          const events = parseSSEBuffer(buffer);
          for (const event of events) {
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
export async function* streamChatCompletion(
  params: StreamChatCompletionParams
): AsyncGenerator<StreamingData, void, unknown> {
  const { baseUrl, message, persona, authToken, authType, maxTokens, abortSignal } = params;
  
  // Build headers
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'text/event-stream',
  };

  // Set authentication header based on authType
  if (authType === 'apiKey') {
    headers['X-API-Key'] = authToken;
  } else {
    headers['Authorization'] = `Bearer ${authToken}`;
  }

  // Build request body
  const body: Record<string, unknown> = {
    message,
  };
  
  if (persona) {
    body.persona = persona;
  }
  
  if (maxTokens) {
    body.max_tokens = maxTokens;
  }

  console.log("sending completion request: ", JSON.stringify(body));
  // Make fetch request
  const response = await fetch(`${baseUrl}/api/chat/completion/stream`, {
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
      errorMessage = errorData.message || errorData.detail || errorMessage;
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

/**
 * Stream chat continuation (continue existing session)
 */
export async function* streamChatContinuation(
  params: StreamChatContinuationParams
): AsyncGenerator<StreamingData, void, unknown> {
  const { baseUrl, sessionId, message, authToken, authType, maxTokens, abortSignal } = params;
  
  // Build headers
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'text/event-stream',
  };

  // Set authentication header based on authType
  if (authType === 'apiKey') {
    headers['X-API-Key'] = authToken;
  } else {
    headers['Authorization'] = `Bearer ${authToken}`;
  }

  // Build request body
  const body: Record<string, unknown> = {
    session: sessionId,
    message,
  };
  
  if (maxTokens) {
    body.max_tokens = maxTokens;
  }

  // Make fetch request
  const response = await fetch(`${baseUrl}/api/chat/continuation/stream`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
    signal: abortSignal,
  });

  if (!response.ok) {
    let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorData.detail || errorMessage;
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
