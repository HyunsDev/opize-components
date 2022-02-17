import React from 'react';
import '../var.css'

import { CodeBlock } from '../../lib';

export default {
  title: 'block/Codeblock',
  component: CodeBlock,
  argTypes: {

  },
};

const Template = (args) => <CodeBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  icon: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
  title: 'title',
  subtitle: 'subtitle',
  desc: 'desc',
  children: JSON.stringify({ a: '123' }, null, 4),
  links: [{
    to: '/',
    text: '테스트 링크'
  }],
};