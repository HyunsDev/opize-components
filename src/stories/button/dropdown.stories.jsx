import React from 'react';
import '../var.css'

import Opize from '../../lib/assets/opize.png'

import { Dropdown } from '../../lib';

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
  img: Opize,
  label: 'Opize',
  menus: [
    {
      to: '/',
      img: 'https://static.opize.me/opize.png',
      label: '스토리북 테스트'
    }
  ]
};