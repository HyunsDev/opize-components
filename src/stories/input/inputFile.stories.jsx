import React from 'react';
import '../var.css'

import { InputFile } from '../../lib/input/inputFile';

export default {
  title: 'input/InputFile',
  component: InputFile,
  argTypes: {},
};

const Template = (args) => <InputFile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};