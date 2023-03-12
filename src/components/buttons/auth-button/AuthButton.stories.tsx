import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import AuthButton, { type IAuthButton } from './AuthButton';
import { mockAuthButtonProps } from './AuthButton.mock';

export default {
  title: 'buttons/AuthButton',
  component: AuthButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AuthButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AuthButton> = (args) => (
  <AuthButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockAuthButtonProps.base,
} as IAuthButton;
