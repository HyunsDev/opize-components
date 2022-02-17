import React from 'react';

import { Spinner } from '../../lib';

export default {
  title: 'component/Spinner',
  component: Spinner,
  argTypes: {
    size: { control: 'number' },
    strokeWidth: { control: 'number' },
    color: { control: 'color' }
  },
};

const Template = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 32,
  strokeWidth: 4,
  color: 'var(--grey9)'
};