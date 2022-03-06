import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import OpizeLogo from '../assets/opize.png'

import { CodeBlock } from '../../lib';

export default {
  title: 'component/CodeBlock',
  component: CodeBlock,
  argTypes: {
    
  },
} as ComponentMeta<typeof CodeBlock>

const Template: ComponentStory<typeof CodeBlock> = (args) => <CodeBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: OpizeLogo,
  title: 'title',
  subtitle: 'subtitle',
  desc: 'desc',
  links: [
    {
      to: '/', text: 'text'
    }
  ],
  children: JSON.stringify({code: 'hello, world!'}, null, 4)
};

export const Mini = Template.bind({});
Mini.args = {
  size: 'mini',
  icon: OpizeLogo,
  title: 'title',
  subtitle: 'subtitle',
  desc: 'desc',
  links: [
    {
      to: '/', text: 'text'
    }
  ],
  children: JSON.stringify({code: 'hello, world!'}, null, 4)
};