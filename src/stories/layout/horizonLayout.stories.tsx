import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HorizonLayout, Button } from '../../lib';

export default {
  title: 'layout/HorizonLayout',
  component: HorizonLayout,
  argTypes: {
  },
} as ComponentMeta<typeof HorizonLayout>

const Template: ComponentStory<typeof HorizonLayout> = (args) => <HorizonLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'label',
  children: <Button />
};