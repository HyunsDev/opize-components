import React from 'react';
import '../var.css'

import { Header, Dropdown } from '../../lib';

export default {
  title: 'header/Header',
  component: Header,
  argTypes: {
    isLogin: {control: 'boolean'}
  },
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  isLogin: true,
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
  userMenus: [
    {
      to: '/',
      label: '유저 메뉴'
    }
  ],
  user: {
    name: '유저',
    profileImage: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
  }
};

export const SubComponents = Template.bind({});
SubComponents.args = {
  primary: true,
  isLogin: true,
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
  userMenus: [
    {
      to: '/',
      label: '유저 메뉴'
    }
  ],
  user: {
    name: '유저',
    profileImage: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
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
  primary: true,
  isLogin: false,
  loginTo: '/login',
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
  userMenus: [
    {
      to: '/',
      label: '유저 메뉴'
    }
  ],
  user: {
    name: '유저',
    profileImage: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
  }
};