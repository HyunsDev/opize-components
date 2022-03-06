import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextField } from '../../lib';

export default {
  title: 'input/TextField',
  component: TextField,
  argTypes: {
  },
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

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

