import React from 'react';
import '../var.css'

import { MiniBtnsBlock } from '../../lib/block/miniBtnsBlock';

export default {
  title: 'block/MiniBtnsBlock',
  component: MiniBtnsBlock,
  argTypes: {
    
  },
};

const Template = (args) => <MiniBtnsBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: 'title',
  subtitle: 'subtitle',
  btns: [
    {
      color: 'var(--teal5)',
      onClick: () => {},
      label: 'test'
    }
  ],
};

export const HasChildren = Template.bind({});
HasChildren.args = {
  primary: true,
  title: 'title',
  subtitle: 'subtitle',
  btns: [
    {
      color: 'var(--teal5)',
      onClick: () => {},
      label: 'test'
    }
  ],
  children: <a href='/'><img src="https://static.opize.me/opize/1644938172061/test_banner_2.png" alt="" /></a>
};