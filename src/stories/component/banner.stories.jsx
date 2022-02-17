import React from 'react';
import '../var.css'

import { Banner } from '../../lib';

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
  banners: [
    {
      to: 'https://opize.me',
      bannerUrl: 'https://static.opize.me/opize/1645075445187/opize 테스트 배너.png'
    },
    {
      to: 'https://opize.me',
      bannerUrl: 'https://static.opize.me/opize/1645075445187/opize 테스트 배너.png'
    }
  ]
};
