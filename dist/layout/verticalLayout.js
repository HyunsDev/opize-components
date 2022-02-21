import styled from "styled-components";
import React from 'react';
const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: ${props => props.marginTop}px;
    gap: 8px;
`;
const Title = styled.div`
    width: 250px;
    font-size: 16px;
    display: flex;
    padding-top: 8px;
`;
const Children = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    gap: 8px;
`;
export function VerticalLayout(props) {
  return /*#__PURE__*/React.createElement(Div, {
    marginTop: props.marginTop
  }, /*#__PURE__*/React.createElement(Title, null, props.label), /*#__PURE__*/React.createElement(Children, null, props.children));
}
VerticalLayout.defaultProps = {
  label: 'label',
  marginTop: 0
};