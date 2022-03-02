import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { H2 } from '../../lib';

export default {
  title: 'title/H2',
  component: H2,
  argTypes: {
  },
} as ComponentMeta<typeof H2>

const Template: ComponentStory<typeof H2> = (args) => <H2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'title'
};