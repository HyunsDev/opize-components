import React from 'react';
import '../var.css'

import { Btn } from '../../lib/button';

export default {
  title: 'button/Btn',
  component: Btn,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    backgroundColorHover: { control: 'color' },
    type: { control: {
      type: 'select',
      options: [ 'button', 'submit' ]
    }},
    label: {control: 'text'},
    isLoading: { control: 'boolean' },
  },
};

const Template = (args) => <Btn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const ColorBtn = Template.bind({});
ColorBtn.args = {
  primary: false,
  color: 'var(--teal0)',
  backgroundColor: 'var(--teal5)',
  backgroundColorHover: 'var(--teal6)',
};