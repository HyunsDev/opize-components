import React from 'react';
import '../var.css'

import { Search } from '../../lib';

export default {
  title: 'input/search',
  component: Search,
  argTypes: {
    value: {control: 'text'},
    placeholder: {control: 'text'},
  },
};

const Template = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};