import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import OpizeLogo from '../assets/opize.png'

import { Card } from '../../lib';

export default {
  title: 'component/Card',
  component: Card,
  argTypes: {
    
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cardLogo: OpizeLogo,
  cardNumber: '0000000000000000',
  cardInfo: '카드 정보',
  cardCompany: '카드사',
};

export const noCard = Template.bind({});
noCard.args = {
  cardLogo: OpizeLogo,
  cardNumber: '카드등록',
};