import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header, Dropdown } from '../../lib';

export default {
  title: 'component/Header',
  component: Header,
  argTypes: {
    
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  app: 'example',
  projects: {
    example: {
      to: '/',
      img: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
      label: 'example Project'
    },
    example2: {
      to: '/',
      img: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
      label: 'example Project 2'
    },
  },
  menus: [
    {
      to: '/',
      label: '메뉴'
    }
  ],
  user: {
    name: '유저',
    img: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
    isLogin: true,
    login: {
      to: '/',
      label: 'loginLabel'
    },
    menus: [
      {
        to: '/',
        label: '유저 메뉴'
      }
    ]
  },
  cta: {
    label: 'button.label',
    to: '/'
  }
};

export const SubComponents = Template.bind({});
SubComponents.args = {
  app: 'example',
  projects: {
    example: {
      to: '/',
      img: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
      label: 'example Project'
    }
  },
  menus: [
    {
      to: '/',
      label: '메뉴'
    }
  ],
  user: {
    name: '유저',
    img: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
    isLogin: true,
    login: {
      to: '/',
      label: 'loginLabel'
    },
    menus: [
      {
        to: '/',
        label: '유저 메뉴'
      }
    ]
  },
  subComponents: [
    <Dropdown {...{
      to: '/',
      img: 'https://static.opize.me/opize.png',
      label: 'example Project'
    }} menus={Object.values({
      example: {
          to: '/',
          img: 'https://static.opize.me/opize.png',
          label: 'example Project'
      }
    })} />
  ]
};

export const unLogin = Template.bind({});
unLogin.args = {
  app: 'example',
  projects: {
    example: {
      to: '/',
      img: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
      label: 'example Project'
    }
  },
  menus: [
    {
      to: '/',
      label: '메뉴'
    }
  ],
  user: {
    name: '유저',
    img: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
    isLogin: false,
    login: {
      to: '/',
      label: 'loginLabel'
    },
    menus: [
      {
        to: '/',
        label: '유저 메뉴'
      }
    ]
  },
};