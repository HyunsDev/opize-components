import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { H3 } from '../../lib';

export default {
  title: 'title/H3',
  component: H3,
  argTypes: {
  },
} as ComponentMeta<typeof H3>

const Template: ComponentStory<typeof H3> = (args) => <H3 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'title'
};