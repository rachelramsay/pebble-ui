import { Button } from '../components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'All visual values come from `tokens.css`. Change a token and every story updates automatically.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Visual style — maps to a distinct token combination',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    loading:  { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    children: { control: 'text' },
  },
};

// ── Primary story (the "default" that drives autodocs) ──
export const Primary = {
  args: { variant: 'primary', children: 'Save changes' },
};

export const Secondary = {
  args: { variant: 'secondary', children: 'Cancel' },
};

export const Ghost = {
  args: { variant: 'ghost', children: 'Learn more' },
};

export const Danger = {
  args: { variant: 'danger', children: 'Delete item' },
};

export const Disabled = {
  args: { variant: 'primary', children: 'Unavailable', disabled: true },
};

export const Loading = {
  args: { variant: 'primary', children: 'Saving…', loading: true },
};

export const SmallSize = {
  args: { variant: 'primary', size: 'sm', children: 'Small' },
};

export const LargeSize = {
  args: { variant: 'primary', size: 'lg', children: 'Large' },
};

// ── All variants at a glance ──
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

// ── All sizes ──
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
