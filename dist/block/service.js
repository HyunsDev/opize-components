import { Link } from "react-router-dom";
import styled from "styled-components";
import React from 'react';
const Info = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
`;
const Name = styled.div`
    color: var(--grey9);
    font-size: 22px;
    font-weight: 800;
    display: flex;
    align-items: center;
`;
const Desc = styled.div`
    color: #747474;
    font-size: 14px;
`;
const ServiceLink = styled(Link)`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: ${props => props.padding || 20}px;
    align-items: center;
    background-color: var(--grey1);
    border-radius: 8px;
    text-decoration: none;
    gap: 16px;
    transition: 200ms;

    &:hover {
        background-color: var(--grey2);
    }
`;
const ServiceA = styled.a`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: ${props => props.padding || 20}px;
    align-items: center;
    background-color: var(--grey1);
    border-radius: 8px;
    text-decoration: none;
    gap: 16px;
    transition: 200ms;

    ${Name}::after {
        content: "↗";
        margin-left: 4px;
        color: var(--grey1);
        font-size: 24px;
        transition: 200ms;
    }

    &:hover {
        background-color: var(--grey2);

        ${Name}::after {
            color: var(--grey8);
        }
    }
`;
const IconDiv = styled.div`
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    border-radius: 40px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 36px;
        width: 36px
    }
`;
export function Service(props) {
  if (props.to.includes("http")) {
    return /*#__PURE__*/React.createElement(ServiceA, {
      href: props.to,
      padding: props.padding
    }, /*#__PURE__*/React.createElement(IconDiv, null, /*#__PURE__*/React.createElement("img", {
      src: props.icon,
      alt: props.name
    })), /*#__PURE__*/React.createElement(Info, null, /*#__PURE__*/React.createElement(Name, null, props.name || "name"), /*#__PURE__*/React.createElement(Desc, null, props.desc || "desc")));
  } else {
    return /*#__PURE__*/React.createElement(ServiceLink, {
      to: props.to,
      padding: props.padding
    }, /*#__PURE__*/React.createElement(IconDiv, null, /*#__PURE__*/React.createElement("img", {
      src: props.icon,
      alt: props.name
    })), /*#__PURE__*/React.createElement(Info, null, /*#__PURE__*/React.createElement(Name, null, props.name || "name"), /*#__PURE__*/React.createElement(Desc, null, props.desc || "desc")));
  }
}
Service.defaultProps = {
  to: '',
  icon: '',
  name: '',
  desc: ''
};