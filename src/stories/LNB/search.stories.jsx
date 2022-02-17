import React from 'react';
import '../var.css'

import { HorizonLNB } from '../../lib/LNB';

export default {
  title: 'LNB/horizonLNB',
  component: HorizonLNB,
  argTypes: {
    exact: {control: 'boolean'},
    selected: { control: {
      type: 'select',
      options: [ 'example1', 'example2' ]
    }},
  },
};

const Template = (args) => <HorizonLNB {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  menu: [
    {
        id: 'example1',
        onClick: () => {},
        label: 'example1'
    },
    {
        id: 'example2',
        onClick: () => {},
        label: 'example2'
    },
  ],
  exact: true,
  selected: 'example1'
};