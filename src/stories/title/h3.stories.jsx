import React from 'react';
import '../var.css'

import { H3 } from '../../lib';

export default {
  title: 'title/H3',
  component: H3,
  argTypes: {}
};

const Template = (args) => <H3 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 16
};