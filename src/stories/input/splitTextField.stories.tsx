import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SplitTextField } from '../../lib';

export default {
  title: 'input/SplitTextField',
  component: SplitTextField,
  argTypes: {
  },
} as ComponentMeta<typeof SplitTextField>

const Template: ComponentStory<typeof SplitTextField> = (args) => <SplitTextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onChange: () => null,
  onKeyPress: () => null,
  type: 'text',
  maxLength: 4,
};