import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Textarea } from '../../lib';

export default {
  title: 'input/Textarea',
  component: Textarea,
  argTypes: {
  },
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'label',
  placeholder: 'placeholder',
  message: 'message',
};

export const error = Template.bind({});
error.args = {
  label: 'label',
  placeholder: 'placeholder',
  message: 'message',
  error: true,
};


export const clear = Template.bind({});
clear.args = {
  placeholder: 'placeholder',
};

