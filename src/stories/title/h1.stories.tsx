import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { H1 } from '../../lib';

export default {
  title: 'title/H1',
  component: H1,
  argTypes: {
  },
} as ComponentMeta<typeof H1>

const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'title'
};