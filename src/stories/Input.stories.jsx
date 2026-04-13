import { Input } from '../components/Input/Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size:      { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled:  { control: 'boolean' },
    required:  { control: 'boolean' },
    label:     { control: 'text' },
    placeholder: { control: 'text' },
    helperText:  { control: 'text' },
    errorText:   { control: 'text' },
  },
};

export const Default = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
  },
};

export const WithHelper = {
  args: {
    label: 'Username',
    placeholder: 'pebble_user',
    helperText: 'Only letters, numbers, and underscores.',
  },
};

export const ErrorState = {
  args: {
    label: 'Password',
    type: 'password',
    value: 'short',
    errorText: 'Password must be at least 8 characters.',
  },
};

export const Disabled = {
  args: {
    label: 'Account ID',
    value: 'usr_8a2f3c',
    disabled: true,
    helperText: 'This field cannot be changed.',
  },
};

export const Required = {
  args: {
    label: 'Full name',
    placeholder: 'Rachel Hansen',
    required: true,
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};
