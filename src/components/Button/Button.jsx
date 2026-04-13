import React from 'react';
import './Button.css';

/**
 * Button — Pebble UI
 *
 * Props:
 *   variant  — 'primary' | 'secondary' | 'ghost' | 'danger'
 *   size     — 'sm' | 'md' | 'lg'
 *   disabled — boolean
 *   loading  — boolean (shows spinner, disables interaction)
 *   fullWidth — boolean
 *   onClick  — function
 *   children — ReactNode
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  children,
  ...props
}) {
  return (
    <button
      className={[
        'pebble-btn',
        `pebble-btn--${variant}`,
        `pebble-btn--${size}`,
        fullWidth ? 'pebble-btn--full' : '',
        loading  ? 'pebble-btn--loading' : '',
      ].join(' ').trim()}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="pebble-btn__spinner" aria-hidden="true" />}
      <span className={loading ? 'pebble-btn__label--loading' : ''}>
        {children}
      </span>
    </button>
  );
}
