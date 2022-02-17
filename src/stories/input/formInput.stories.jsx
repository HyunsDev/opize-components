import React from 'react';
import '../var.css'

import { FormInput } from '../../lib';

export default {
  title: 'input/FormInput',
  component: FormInput,
  argTypes: {
    label: {control: 'text'},
    placeholder: {control: 'text'},
    autoComplete: {control: 'text'},
  },
};

const Template = (args) => <FormInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};