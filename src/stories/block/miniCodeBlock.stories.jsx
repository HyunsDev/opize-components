import React from 'react';
import '../var.css'

import { MiniCodeBlock } from '../../lib/block/miniCodeblock';

export default {
  title: 'block/MiniCodeBlock',
  component: MiniCodeBlock,
  argTypes: {
    
  },
};

const Template = (args) => <MiniCodeBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: 'title',
  subTitle: 'subTitle',
  info: 'info',
  children: JSON.stringify({a: '123'}, null, 4),
  links: [{
    to: '/',
    text: '테스트 링크'
  }],
};