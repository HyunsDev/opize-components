import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Page } from '../../lib';

export default {
  title: 'component/Page',
  component: Page,
  argTypes: {
  },
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};