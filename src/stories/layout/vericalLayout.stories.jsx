import React from 'react';
import '../var.css'

import { VerticalLayout } from '../../lib';
import { Input, Btn } from '../../lib';

export default {
  title: 'layout/VerticalLayout',
  component: VerticalLayout,
  argTypes: {

  },
};

const Template = (args) => <VerticalLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'OPIZE',
  marginTop: 0,
  children: <><Input /><Btn /></>
};