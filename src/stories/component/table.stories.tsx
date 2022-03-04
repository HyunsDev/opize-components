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
  column: ['img', 'title', 'number', 'boolean', 'button', 'badge', 'unknown'],
  items: [
    {
      title: 'title',
      number: 123,
      boolean: true,
      img: OpizeLogo,
      button: {
        type: 'button',
        label: 'Button',
        onClick: () => null,
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