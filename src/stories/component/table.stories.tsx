import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import OpizeLogo from '../assets/opize.png'

import { Table } from '../../lib';

export default {
  title: 'component/Table',
  component: Table,
  argTypes: {
    
  },
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  column: ['img', 'title', 'number', 'profile', 'boolean', 'button', 'button_img', 'badge', 'unknown'],
  items: [
    {
      title: 'title',
      number: 123,
      boolean: true,
      profile: {
        type: 'profile',
        label: 'profile',
        img: OpizeLogo,
      },
      img: 'https://static.opize.me/opize.png',
      button: {
        type: 'button',
        label: 'Button',
        onClick: () => null,
      },
      button_img: {
        type: 'button',
        label: 'Button',
        onClick: () => null,
        img: OpizeLogo,
      },
      badge: {
        type: 'badge',
        value: [
          {
            label: 'success',
            color: 'success'
          },
          {
            label: 'error',
            color: 'error'
          },
          {
            label: 'normal',
            color: 'normal'
          },
          {
            label: 'teal',
            color: 'teal'
          }
        ]
      },
    }
],
};