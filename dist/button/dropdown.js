import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from 'react';
const SelectorDivver = styled.div`
    z-index: ${props => props.isOpen ? 999 : 0};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: relative;
`;
const NowPage = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    transition: 200ms;
    position: relative;
    cursor: pointer;
    user-select: none;
    background-color: ${props => props.isOpen ? "var(--greyPlaceholder)" : "transparent"};

    img {
        height: 24px;
    }

    div {
        color: var(--grey9);
    }

    &:hover {
        background-color: var(--greyPlaceholder);
    }
`;
const Selector = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 40px;
    background-color: #ffffff;
    min-width: 180px;
    padding: 8px 0px;
    border: solid 1px var(--grey3);
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    overflow: hidden;
    user-select: none;
    z-index: 10;
    ${props => props.direction || "left"}: 0;
    visibility : ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: transform 100ms cubic-bezier(0.84,-0.88, 0.01, 2.12), opacity 150ms;
    transform: scale(${props => props.isOpen ? 1 : 0.9});
    transform-origin: ${props => props.direction || "left"} top;
    opacity: ${props => props.isOpen ? 1 : 0};
`;
const SelectorItem = styled(Link)`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    text-decoration: none;
    transition: 200ms;
    width: 100%;
    z-index: 10;

    img {
        height: 24px;
    }

    div {
        color: var(--grey9);
        width: 100%;
        white-space: nowrap;
    }

    &:hover {
        background-color: var(--grey1);
    }
`;
const SelectorItemA = styled.a`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    text-decoration: none;
    transition: 200ms;
    width: 100%;
    z-index: 10;

    img {
        height: 24px;
    }

    div {
        color: var(--grey9);
        width: 100%;
        white-space: nowrap;
    }

    &:hover {
        background-color: var(--grey1);
    }
`;
const CloseBackground = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
`;
export function Dropdown(props) {
  const [isOpen, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectorDivver, {
    isOpen: isOpen,
    onClick: () => {
      setOpen(!isOpen);
    }
  }, /*#__PURE__*/React.createElement(NowPage, {
    isOpen: isOpen
  }, props.img && /*#__PURE__*/React.createElement("img", {
    src: props.img,
    alt: "\uB85C\uACE0"
  }), props.label && /*#__PURE__*/React.createElement("div", null, props.label)), /*#__PURE__*/React.createElement(Selector, {
    isOpen: isOpen,
    direction: props.direction
  }, props.menus && props.menus.map((e, i) => {
    if (e.hide) return null;

    if (e.to.includes("http")) {
      return /*#__PURE__*/React.createElement(SelectorItemA, {
        href: e.to,
        key: i
      }, e.img && /*#__PURE__*/React.createElement("img", {
        src: e.img,
        alt: ""
      }), /*#__PURE__*/React.createElement("div", null, e.label || "label"));
    } else {
      return /*#__PURE__*/React.createElement(SelectorItem, {
        to: e.to,
        key: i
      }, e.img && /*#__PURE__*/React.createElement("img", {
        src: e.img,
        alt: ""
      }), /*#__PURE__*/React.createElement("div", null, e.label || "label"));
    }
  }))), isOpen && /*#__PURE__*/React.createElement(CloseBackground, {
    onClick: () => setOpen(false)
  }));
}
Dropdown.defaultProps = {
  menus: [],
  direction: 'left'
};