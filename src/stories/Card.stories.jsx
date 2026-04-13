import { Card }   from '../components/Card/Card';
import { Button } from '../components/Button/Button';
import { Badge }  from '../components/Badge/Badge';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant:   { control: 'select', options: ['default', 'outlined', 'elevated'] },
    padding:   { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    clickable: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    variant: 'default',
    padding: 'md',
    children: 'A simple card with default padding.',
  },
};

export const Elevated = {
  render: () => (
    <Card variant="elevated" style={{ width: 320 }}>
      <Card.Header title="Workspace" subtitle="Last updated 2 hours ago" />
      <Card.Body>
        <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text-muted)' }}>
          Your files and projects live here. Invite teammates to collaborate.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button size="sm" variant="primary">Open</Button>
        <Button size="sm" variant="ghost">Share</Button>
      </Card.Footer>
    </Card>
  ),
};

export const WithBadge = {
  render: () => (
    <Card variant="outlined" style={{ width: 300 }}>
      <Card.Header
        title="API usage"
        subtitle="March 2025"
        action={<Badge variant="success" dot>Live</Badge>}
      />
      <Card.Body>
        <p style={{ margin: 0, fontSize: 14 }}>1,240 / 5,000 requests used</p>
      </Card.Body>
    </Card>
  ),
};

export const Clickable = {
  args: {
    variant: 'default',
    padding: 'md',
    clickable: true,
    children: 'Click me — I have a hover + focus state.',
  },
};
