import styled from "styled-components";
import React from 'react';
const CheckBoxDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const Input = styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;
const Icon = styled.svg`
    fill: none;
    stroke: var(--grey1);
    stroke-width: 2px;
`;
const FakeCheckBox = styled.div`
    display: inline-block;
    min-width: 24px; 
    width: 24px;
    height: 24px;
    border: solid 1px var(--grey4);
    background: ${props => props.checked ? 'var(--grey9)' : 'var(--grey1)'};
    border-radius: 8px;
    transition: 200ms;
    cursor: pointer;

    &:hover {
        border: solid 1px #B8B8B8;
    }

    ${Icon} {
        visibility: ${props => props.checked ? 'visible' : 'hidden'};
    }
`;
const Label = styled.div`
    font-size: 14px;
    color: #747474;

    a {
        color: #747474;
    }
`;
export function Checkbox(props) {
  // const [isCheck, setCheck] = useState(props.value)
  return /*#__PURE__*/React.createElement(CheckBoxDiv, null, /*#__PURE__*/React.createElement(Input, {
    type: 'checkbox',
    checked: props.value,
    onChange: props.onChange
  }), /*#__PURE__*/React.createElement(FakeCheckBox, {
    checked: props.value,
    onClick: () => props.onChange(!props.value)
  }, /*#__PURE__*/React.createElement(Icon, {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "19 7 10 17 5 12"
  }))), /*#__PURE__*/React.createElement(Label, null, props.label));
}
Checkbox.defaultProps = {
  value: true,
  onChange: () => {},
  label: ''
};