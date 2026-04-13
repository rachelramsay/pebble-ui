import React, { useState } from 'react';
import { Button } from './components/Button/Button';
import { Card }   from './components/Card/Card';
import { Input }  from './components/Input/Input';
import { Badge }  from './components/Badge/Badge';

const styles = {
  page: {
    minHeight: '100vh',
    background: 'var(--color-surface-subtle)',
    fontFamily: 'var(--font-sans)',
    padding: 'var(--space-6)',
  },
  container: {
    maxWidth: 720,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-6)',
  },
  header: {
    borderBottom: '1px solid var(--color-border)',
    paddingBottom: 'var(--space-4)',
  },
  title: {
    fontSize: 'var(--text-2xl)',
    fontWeight: 700,
    color: 'var(--color-text)',
    margin: 0,
  },
  subtitle: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-text-muted)',
    margin: 'var(--space-1) 0 0',
  },
  sectionLabel: {
    fontSize: 'var(--text-xs)',
    fontWeight: 500,
    color: 'var(--color-text-muted)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: 'var(--space-3)',
  },
  row: {
    display: 'flex',
    gap: 'var(--space-3)',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
};

export default function App() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading]   = useState(false);

  function handleSubmit() {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>Pebble UI</h1>
          <p style={styles.subtitle}>
            Design systems starter — tokens → components → Storybook
          </p>
        </header>

        {/* Buttons */}
        <section>
          <p style={styles.sectionLabel}>Button</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <div style={styles.row}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
            <div style={styles.row}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div style={styles.row}>
              <Button disabled>Disabled</Button>
              <Button loading={loading} onClick={handleSubmit}>
                {loading ? 'Saving…' : 'Save (click me)'}
              </Button>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section>
          <p style={styles.sectionLabel}>Badge</p>
          <div style={styles.row}>
            <Badge variant="brand" dot>New</Badge>
            <Badge variant="success" dot>Published</Badge>
            <Badge variant="error" dot>Failed</Badge>
            <Badge variant="neutral">Draft</Badge>
            <Badge variant="brand" size="sm">Small</Badge>
          </div>
        </section>

        {/* Inputs */}
        <section>
          <p style={styles.sectionLabel}>Input</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
            <Input
              label="Email address"
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="Min 8 characters"
              value={password}
              onChange={e => setPassword(e.target.value)}
              errorText={password.length > 0 && password.length < 8 ? 'Password must be at least 8 characters.' : ''}
              helperText={!password ? "Choose something you'll remember." : ''}
            />
            <Input
              label="Account ID"
              value="usr_8a2f3c"
              disabled
              helperText="This field cannot be changed."
            />
          </div>
        </section>

        {/* Cards */}
        <section>
          <p style={styles.sectionLabel}>Card</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>

            <Card variant="default">
              <Card.Header title="Default card" subtitle="With header + body" />
              <Card.Body>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  All padding, color, and radius values come from your token file.
                </p>
              </Card.Body>
            </Card>

            <Card variant="elevated">
              <Card.Header
                title="API usage"
                subtitle="March 2025"
                action={<Badge variant="success" dot>Live</Badge>}
              />
              <Card.Body>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)' }}>1,240 / 5,000 requests</p>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="ghost">View details</Button>
              </Card.Footer>
            </Card>

            <Card variant="outlined" clickable onClick={() => alert('Card clicked!')}>
              <Card.Body>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                  Clickable card
                </p>
                <p style={{ margin: 'var(--space-1) 0 0', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  Hover and focus states built in.
                </p>
              </Card.Body>
            </Card>

            <Card variant="default" padding="lg">
              <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                Large padding variant — try changing <code>--space-5</code> in tokens.css and watch this update.
              </p>
            </Card>

          </div>
        </section>

        {/* Token reminder */}
        <Card variant="default" padding="md">
          <Card.Header title="How to update a token" />
          <Card.Body>
            <ol style={{ margin: 0, paddingLeft: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--pebble-global-font-line-height-loose)' }}>
              <li>Edit <code>src/tokens/tokens.json</code> (or update your Figma variables)</li>
              <li>Run <code>npm run tokens</code> to regenerate <code>tokens.css</code></li>
              <li>Every component updates — no component code changes needed</li>
            </ol>
          </Card.Body>
        </Card>

      </div>
    </div>
  );
}
