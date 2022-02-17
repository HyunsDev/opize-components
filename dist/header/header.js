function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import styled from "styled-components";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { ArrowRight } from 'phosphor-react';
import { Dropdown } from "../button/dropdown";
const Divver = styled.div`
    display: flex;
    z-index: 10;
    box-sizing: border-box;
    width: 100%;
    height: 52px;
    justify-content: space-between;
    padding: 0px 8px;
    position: fixed;
    top: 0;
    transition: 200ms;
    border-bottom: solid 1px ${props => props.isTop ? "rgba(0,0,0,0)" : "var(--grey2)"} ;
    background-color: ${props => props.isTop ? "transparent" : "#ffffff"};
`;
const Items = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 8px;
`;
const MenuBtn = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px;
    border-radius: 8px;
    transition: 200ms;
    color: var(--grey9);
    font-size: 14px;
    min-height: 36px;
    box-sizing: border-box;
    
    &:hover {
        background-color: var(--greyPlaceholder)
    }
`;
const LoginBtn = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px;
    border-radius: 8px;
    transition: 200ms;
    color: #2D6560;
    font-weight: 800;
    gap: 8px;
    font-size: 14px;

    &:hover {
        background-color: rgba(0,0,0,0.08)
    }
`;
export function Header(props) {
  const {
    t
  } = useTranslation('translation');
  const [isTop, setIsTop] = useState(true);

  const onScroll = () => {
    setIsTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement(Divver, {
    isTop: isTop
  }, /*#__PURE__*/React.createElement(Items, null, /*#__PURE__*/React.createElement(Dropdown, _extends({}, props.projects[props.app], {
    menus: Object.values(props.projects)
  }))), /*#__PURE__*/React.createElement(Items, null, props.menus.map((e, i) => /*#__PURE__*/React.createElement(MenuBtn, {
    to: e.to,
    key: i
  }, e.label)), props.isLogin ? /*#__PURE__*/React.createElement(Dropdown, {
    direction: "right",
    name: props.user.name,
    img: props.user.profileImage,
    menus: props.userMenus
  }) : /*#__PURE__*/React.createElement(LoginBtn, {
    to: props.loginTo
  }, t('login'), /*#__PURE__*/React.createElement(ArrowRight, {
    size: 20,
    weight: "bold"
  }))));
}
Header.defaultProps = {
  isLogin: false,
  loginTo: '/login',
  projects: {
    example: {
      to: '/',
      img: 'https://static.opize.me/opize.png',
      label: 'example Project'
    }
  },
  menus: [],
  userMenus: [],
  app: 'example',
  user: {
    name: 'example user',
    profileImage: 'https://static.opize.me/opize/1645012676462/opize-circle.png'
  }
};