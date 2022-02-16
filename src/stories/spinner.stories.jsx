import React from 'react';

import { Spinner } from '../lib/spinner';

export default {
  title: 'Opize/Spinner',
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
};