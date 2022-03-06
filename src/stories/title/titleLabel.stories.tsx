import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TitleLabel } from '../../lib';

export default {
  title: 'title/TitleLabel',
  component: TitleLabel,
  argTypes: {
  },
} as ComponentMeta<typeof TitleLabel>

const Template: ComponentStory<typeof TitleLabel> = (args) => <TitleLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'title'
};