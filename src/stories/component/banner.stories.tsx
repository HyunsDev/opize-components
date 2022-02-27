import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Banner } from '../../lib';

export default {
  title: 'component/Banner',
  component: Banner,
  argTypes: {
  },
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  banners: [{
    to: 'https://opize.me',
    img: 'https://static.opize.me/opize/1645075445187/opize 테스트 배너.png'
  }]
};