import React from 'react';
import '../var.css'

import { MiniClickableBlock } from '../../lib';

export default {
  title: 'block/MiniClickableBlock',
  component: MiniClickableBlock,
  argTypes: {
    
  },
};

const Template = (args) => <MiniClickableBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: 'title',
  subtitle: 'subtitle',
  info: 'info'
};

export const HasChildren = Template.bind({});
HasChildren.args = {
  primary: true,
  title: 'title',
  subtitle: 'subtitle',
  info: 'info',
  children: <a href='/'><img src="https://static.opize.me/opize/1644938172061/test_banner_2.png" alt="" /></a>
};