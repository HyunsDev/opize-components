import React from 'react';
import '../var.css'

import { H2, TitleLabel } from '../../lib';

export default {
  title: 'title/TitleLabel',
  component: TitleLabel,
  argTypes: {}
};

const Template = (args) => <><H2>제목</H2><TitleLabel {...args} /></>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "제목 라벨",
  size: 14,
  marginTop: -8
};