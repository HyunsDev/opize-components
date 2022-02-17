import React from 'react';
import '../var.css'

import { Page } from '../../lib/page';

export default {
  title: 'page/page',
  component: Page,
  argTypes: {
    width: { control: 'number' },
  },
};

const Template = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};