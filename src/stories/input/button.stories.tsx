import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button } from '../../lib';

export default {
  title: 'input/Button',
  component: Button,
  argTypes: {
  },
} as Meta

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'text'
};