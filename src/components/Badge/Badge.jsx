import React from 'react';
import './Badge.css';

/**
 * Badge — Pebble UI
 *
 * Props:
 *   variant — 'brand' | 'success' | 'error' | 'neutral'
 *   size    — 'sm' | 'md'
 *   dot     — boolean (show a colored dot indicator)
 *   children — ReactNode (label text)
 */
export function Badge({
  variant = 'neutral',
  size = 'md',
  dot = false,
  children,
  ...props
}) {
  return (
    <span
      className={[
        'pebble-badge',
        `pebble-badge--${variant}`,
        `pebble-badge--${size}`,
      ].join(' ')}
      {...props}
    >
      {dot && <span className="pebble-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
