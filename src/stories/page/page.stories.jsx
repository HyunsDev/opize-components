import React from 'react';
import '../var.css'

import { Page, H1, HorizonLNB } from '../../lib';

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

export const WithComponents = Template.bind({});
WithComponents.args = {
  primary: false,
  children: (<>
    <H1>타이틀</H1>
    <HorizonLNB />
  </>)
};