import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { VerticalLayout, Button } from '../../lib';

export default {
  title: 'layout/VerticalLayout',
  component: VerticalLayout,
  argTypes: {
  },
} as ComponentMeta<typeof VerticalLayout>

const Template: ComponentStory<typeof VerticalLayout> = (args) => <VerticalLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'label',
  children: <Button />
};