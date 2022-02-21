import React from 'react';
import '../var.css'

import { H2 } from '../../lib';

export default {
  title: 'title/H2',
  component: H2,
  argTypes: {}
};

const Template = (args) => <H2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 20
};