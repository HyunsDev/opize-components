import styled from 'styled-components';
import React from 'react';
const Div = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    background-color: var(--grey1);
    border-radius: 8px;
    text-decoration: none;
    transition: 200ms;
`;
const Block = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    transition: 200ms;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 8px 8px 0px 0px;
    user-select: none;

    &:hover {
        background-color: var(--grey2);
    }

    & > div {
        gap: 8px;
        display: flex;
        align-items: center;
    }
`;
const SubTitle = styled.span`
    color: var(--grey5);
    font-size: 12px;
`;
const Title = styled.span`
    font-size: 14px;
`;
const Info = styled.span`
    color: var(--teal5);
    font-size: 14px;
`;
const Children = styled.div`
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export function MiniClickableBlock(props) {
  return /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Block, {
    onClick: () => props.onClick()
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Title, null, props.title), /*#__PURE__*/React.createElement(SubTitle, null, props.subtitle)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Info, null, props.info))), props.children && /*#__PURE__*/React.createElement(Children, null, props.children));
}
MiniClickableBlock.defaultProps = {
  onClick: () => {}
};