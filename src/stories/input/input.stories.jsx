import React from 'react';
import '../var.css'

import { Input } from '../../lib';

export default {
  title: 'input/Input',
  component: Input,
  argTypes: {
    readOnly: {control: 'boolean'},
    placeholder: {control: 'text'},
    isError: {control: 'boolean'},
    value: {control: 'text'}
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};