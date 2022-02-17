import React from 'react';
import '../var.css'

import { Banner } from '../../lib/component/banner';

export default {
  title: 'component/Banner',
  component: Banner,
  argTypes: {

  },
};

const Template = (args) => <Banner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
