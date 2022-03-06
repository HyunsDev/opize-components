import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HorizonLNB } from '../../lib';

export default {
  title: 'component/HorizonLNB',
  component: HorizonLNB,
  argTypes: {
    
  },
} as ComponentMeta<typeof HorizonLNB>

const Template: ComponentStory<typeof HorizonLNB> = (args) => <HorizonLNB {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  menu: [
    {
        id: 'example1',
        onClick: () => {},
        label: 'example1'
    },
    {
        id: 'example2',
        onClick: () => { },
        label: 'example2'
    },
],
};