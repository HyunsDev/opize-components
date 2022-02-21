import React from 'react';
import '../var.css'

import { H1 } from '../../lib';

export default {
  title: 'title/H1',
  component: H1,
  argTypes: {}
};

const Template = (args) => <H1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 32
};