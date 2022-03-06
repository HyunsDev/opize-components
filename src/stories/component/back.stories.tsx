import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Back } from '../../lib';

export default {
  title: 'component/Back',
  component: Back,
  argTypes: {
    
  },
} as ComponentMeta<typeof Back>

const Template: ComponentStory<typeof Back> = (args) => <Back {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};