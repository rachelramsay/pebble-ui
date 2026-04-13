import React from 'react';
import './Card.css';

/**
 * Card — Pebble UI
 *
 * Props:
 *   variant   — 'default' | 'outlined' | 'elevated'
 *   padding   — 'sm' | 'md' | 'lg' | 'none'
 *   clickable — boolean (adds hover state + pointer cursor)
 *   onClick   — function
 *   children  — ReactNode
 */
export function Card({
  variant = 'default',
  padding = 'md',
  clickable = false,
  onClick,
  children,
  ...props
}) {
  return (
    <div
      className={[
        'pebble-card',
        `pebble-card--${variant}`,
        `pebble-card--pad-${padding}`,
        clickable ? 'pebble-card--clickable' : '',
      ].join(' ').trim()}
      onClick={clickable ? onClick : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card.Header — optional structured slot
 */
Card.Header = function CardHeader({ title, subtitle, action }) {
  return (
    <div className="pebble-card__header">
      <div className="pebble-card__header-text">
        {title    && <p className="pebble-card__title">{title}</p>}
        {subtitle && <p className="pebble-card__subtitle">{subtitle}</p>}
      </div>
      {action && <div className="pebble-card__header-action">{action}</div>}
    </div>
  );
};

/**
 * Card.Body — optional structured slot
 */
Card.Body = function CardBody({ children }) {
  return <div className="pebble-card__body">{children}</div>;
};

/**
 * Card.Footer — optional structured slot
 */
Card.Footer = function CardFooter({ children }) {
  return <div className="pebble-card__footer">{children}</div>;
};
