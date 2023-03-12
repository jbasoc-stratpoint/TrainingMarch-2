import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Search, { type ISearch } from './Search';
import { mockSearchProps } from './Search.mock';

export default {
  title: 'utility/Search',
  component: Search,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Search>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockSearchProps.base,
} as ISearch;
