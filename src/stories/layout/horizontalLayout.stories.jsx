import React from 'react';
import '../var.css'

import { HorizontalLayout } from '../../lib';
import { Input, Btn } from '../../lib';

export default {
  title: 'layout/HorizontalLayout',
  component: HorizontalLayout,
  argTypes: {

  },
};

const Template = (args) => <HorizontalLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'OPIZE',
  marginTop: 0,
  children: <><Input /><Btn /></>
};