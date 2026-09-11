/**
 * WidgetStyle -> inline-style-object resolution, framework-agnostic (a plain
 * object structurally compatible with both React's and Preact's style prop
 * types - no framework import here on purpose, so a React presentation can
 * use these without pulling in preact/compat's CSSProperties).
 */

import type { WidgetStyle } from './types';

type StyleObject = Record<string, string | number>;

export const DIALOG_MAX_WIDTH = 'calc(100vw - 2rem)';
export const DIALOG_MAX_HEIGHT = 'calc(100dvh - 8rem)';

export const getPositionStyles = (style?: WidgetStyle): StyleObject => {
  if (!style?.position) {
    return { bottom: '1rem', right: '1rem' }; // Default: bottom-right
  }

  if (typeof style.position === 'string') {
    switch (style.position) {
      case 'bottom-right':
        return { bottom: '1rem', right: '1rem' };
      case 'bottom-left':
        return { bottom: '1rem', left: '1rem' };
      case 'top-right':
        return { top: '1rem', right: '1rem' };
      case 'top-left':
        return { top: '1rem', left: '1rem' };
      default:
        return { bottom: '1rem', right: '1rem' };
    }
  } else {
    const pos: StyleObject = {};
    if (style.position.bottom) pos.bottom = style.position.bottom;
    if (style.position.top) pos.top = style.position.top;
    if (style.position.left) pos.left = style.position.left;
    if (style.position.right) pos.right = style.position.right;
    return pos;
  }
};

export const getDialogSize = (style?: WidgetStyle): StyleObject => {
  const responsive = { maxWidth: DIALOG_MAX_WIDTH, maxHeight: DIALOG_MAX_HEIGHT };

  if (!style?.dialogSize) {
    return { width: '350px', height: '500px', ...responsive };
  }

  if (typeof style.dialogSize === 'string') {
    switch (style.dialogSize) {
      case 'small':
        return { width: '300px', height: '400px', ...responsive };
      case 'medium':
        return { width: '350px', height: '500px', ...responsive };
      case 'large':
        return { width: '400px', height: '600px', ...responsive };
      default:
        return { width: '350px', height: '500px', ...responsive };
    }
  } else {
    return {
      width: `${Math.max(250, style.dialogSize.width)}px`,
      height: `${Math.max(300, style.dialogSize.height)}px`,
      ...responsive,
    };
  }
};

export const getFrameColor = (style?: WidgetStyle): string => {
  return style?.frameColor || '#E5E7EB'; // Default: gray-200
};

export const getButtonColors = (style?: WidgetStyle, isOpen?: boolean): StyleObject => {
  const colors = style?.buttonColor;

  if (isOpen) {
    return {
      backgroundColor: colors?.open || '#1F2937', // Default: gray-800
    };
  }

  return {
    backgroundColor: colors?.normal || '#2563EB', // Default: blue-600
    '--hover-color': colors?.hover || '#1D4ED8', // Default: blue-700
  };
};
