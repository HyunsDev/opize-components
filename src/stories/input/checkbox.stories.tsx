import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkbox } from '../../lib';

export default {
  title: 'input/Checkbox',
  component: Checkbox,
  argTypes: {
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Primary = Template.bind({});
Primary.args = {

};