import React from 'react';

import { Back, Header } from '../../lib';

export default {
  title: 'component/Back',
  component: Back,
  argTypes: {
  },
};

const Template = (args) => <Back {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

const Template1 = (args) => <><Header /><Back {...args} /></>;
export const WithHeader = Template1.bind({});
Primary.args = {
  primary: true,
};