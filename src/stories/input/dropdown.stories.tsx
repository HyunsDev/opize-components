import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import OpizeLogo from '../assets/opize.png'

import { Dropdown } from '../../lib';

export default {
  title: 'input/Dropdown',
  component: Dropdown,
  argTypes: {
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  img: OpizeLogo,
  label: 'opize',
  menus: [
    {
      label: 'text',
      img: OpizeLogo,
    }, {
      label: 'text1',
      img: OpizeLogo,
    }
  ]
};


export const onlyImg = Template.bind({});
onlyImg.args = {
  img: OpizeLogo,
  menus: [
    {
      label: 'text',
      img: OpizeLogo,
    }, {
      label: 'text1',
      img: OpizeLogo,
    }
  ]
};