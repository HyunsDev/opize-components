import React from 'react';
import './var.css'

import { Card } from '../lib/card';

export default {
  title: 'block/Card',
  component: Card,
  argTypes: {
    cardNumber: { control: 'text' },
    cardCompany: { control: 'text' },
    cardInfo: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Registered = Template.bind({});
Registered.args = {
  primary: true,
  cardNumber: '0000000000000000',
  cardCompany: '카카오뱅크',
  cardInfo: 'hyunsdev.test@gmail.com',
};