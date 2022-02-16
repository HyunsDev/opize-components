import React from 'react';
import './var.css'

import { Header } from '../lib/button/dropdown';

export default {
  title: 'button/Dropdown',
  component: Header,
  argTypes: {

  },
};

const Template = (args) => <Header {...args} />;

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