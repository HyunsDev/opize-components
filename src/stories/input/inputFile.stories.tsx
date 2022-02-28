import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputFile } from '../../lib';

export default {
  title: 'input/InputFile',
  component: InputFile,
  argTypes: {
  },
} as ComponentMeta<typeof InputFile>

const Template: ComponentStory<typeof InputFile> = (args) => {
  const [value, setValue] = useState(null)
  return <InputFile {...args} value={value} onChange={setValue} />
};

export const Primary = Template.bind({});
Primary.args = {

};