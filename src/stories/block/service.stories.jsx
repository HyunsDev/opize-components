import React from 'react';
import '../var.css'

import { Service } from '../../lib/block/service';

export default {
  title: 'block/Service',
  component: Service,
  argTypes: {
    
  },
};

const Template = (args) => <Service {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  to: 'https://opize.me',
  icon: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
  name: '오피즈',
  desc: '테스트'
};