import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'

import { Btn } from '../../lib';

export default {
  title: 'button/Btn',
  component: Btn,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    backgroundColorHover: { control: 'color' },
  },
} as Meta

const Template: Story = (args) => <Btn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};