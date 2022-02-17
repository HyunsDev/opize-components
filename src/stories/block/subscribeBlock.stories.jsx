import React from 'react';
import '../var.css'
import { Pause, Receipt } from 'phosphor-react';

import { SubscribeBlock } from '../../lib';

export default {
  title: 'block/SubscribeBlock',
  component: SubscribeBlock,
  argTypes: {
    
  },
};

const Template = (args) => <SubscribeBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  status: 'DONE',
  product: {
      icon: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
      name: 'TEST',
      prices: {
          KRW: '1000'
      }
  },
  project: {
    icon: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
    name: 'OPIZE PROJECT',
    desc: 'DESC'
  },
  user: {
      currency: 'KRW'
  },
  btnIcon: (<Pause size={32} />),
  desc1: '2022-07-08',
  desc2: '2022-07-08',
};

export const NewSubscribe = Template.bind({});
NewSubscribe.args = {
  primary: true,
  status: 'DONE',
  product: {
      icon: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
      name: 'TEST',
      prices: {
          KRW: '1000'
      }
  },
  project: {
    icon: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
    name: 'OPIZE PROJECT',
    desc: 'DESC'
  },
  user: {
      currency: 'KRW'
  }
};

export const subscribeLog = Template.bind({});
subscribeLog.args = {
  primary: true,
  status: 'DONE',
  product: {
      icon: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
      name: 'TEST',
      prices: {
          KRW: '1000'
      }
  },
  project: {
    icon: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
    name: 'OPIZE PROJECT',
    desc: 'DESC'
  },
  user: {
      currency: 'KRW'
  },
  btnIcon: <Receipt size={32} color="var(--teal5)" />,
  onClick: () => window.open('https://opize.me'),
  desc1: '24000 KRW/month',
  desc2: new Date('2022-07-08').toLocaleString()
};