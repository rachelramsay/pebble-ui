import { Badge } from '../components/Badge/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['brand', 'success', 'error', 'neutral'] },
    size:    { control: 'select', options: ['sm', 'md'] },
    dot:     { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const Default = {
  args: { variant: 'brand', children: 'New' },
};

export const Success = {
  args: { variant: 'success', children: 'Published', dot: true },
};

export const Error = {
  args: { variant: 'error', children: 'Failed', dot: true },
};

export const Neutral = {
  args: { variant: 'neutral', children: 'Draft' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="brand" dot>Brand</Badge>
      <Badge variant="success" dot>Success</Badge>
      <Badge variant="error" dot>Error</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
