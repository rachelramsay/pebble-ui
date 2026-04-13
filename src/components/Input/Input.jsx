import React from 'react';
import './Input.css';

/**
 * Input — Pebble UI
 *
 * Props:
 *   label       — string
 *   placeholder — string
 *   helperText  — string (shown below input)
 *   errorText   — string (shown below input in error state; overrides helperText)
 *   size        — 'sm' | 'md' | 'lg'
 *   disabled    — boolean
 *   required    — boolean
 *   type        — HTML input type (default 'text')
 *   value / onChange — controlled input
 */
export function Input({
  label,
  placeholder,
  helperText,
  errorText,
  size = 'md',
  disabled = false,
  required = false,
  type = 'text',
  id,
  value,
  onChange,
  ...props
}) {
  const inputId = id || `pebble-input-${Math.random().toString(36).slice(2, 7)}`;
  const isError = Boolean(errorText);

  return (
    <div
      className={[
        'pebble-input-wrap',
        `pebble-input-wrap--${size}`,
        isError   ? 'pebble-input-wrap--error'    : '',
        disabled  ? 'pebble-input-wrap--disabled'  : '',
      ].join(' ').trim()}
    >
      {label && (
        <label className="pebble-input__label" htmlFor={inputId}>
          {label}
          {required && <span className="pebble-input__required" aria-hidden="true"> *</span>}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        className="pebble-input__field"
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        value={value}
        onChange={onChange}
        aria-invalid={isError || undefined}
        aria-describedby={
          errorText ? `${inputId}-error` :
          helperText ? `${inputId}-helper` : undefined
        }
        {...props}
      />

      {(errorText || helperText) && (
        <p
          className={isError ? 'pebble-input__error' : 'pebble-input__helper'}
          id={isError ? `${inputId}-error` : `${inputId}-helper`}
          role={isError ? 'alert' : undefined}
        >
          {errorText || helperText}
        </p>
      )}
    </div>
  );
}
