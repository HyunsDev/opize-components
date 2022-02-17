import React from 'react';
import '../var.css'

import { Dropdown } from '../../lib/button';

export default {
  title: 'button/Dropdown',
  component: Dropdown,
  argTypes: {

  },
};

const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  menus: [
    {
      to: '/',
      img: 'https://static.opize.me/opize.png',
      label: '스토리북 테스트'
    }
  ]
};