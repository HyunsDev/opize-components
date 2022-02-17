import React from 'react';
import '../var.css'

import { Checkbox } from '../../lib/input';

export default {
  title: 'input/Checkbox',
  component: Checkbox,
  argTypes: {
    value: {control: 'boolean'},
    label: {control: 'text'}
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};