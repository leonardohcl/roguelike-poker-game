import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import PokerButton from './poker-button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Atoms/Button',
  component: PokerButton,
  tags: ['autodocs'],
  args: {
    label: '',
  },
} satisfies Meta<typeof PokerButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

