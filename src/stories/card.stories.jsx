import React from 'react';

import { Card } from '../lib/card';

export default {
  title: 'Opize/Card',
  component: Card,
  argTypes: {
    cardNumber: { control: 'text' },
    cardCompany: { control: 'text' },
    cardInfo: { control: 'text' },
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