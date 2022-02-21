import styled from 'styled-components';
import { MagnifyingGlass } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import React from 'react';
const SearchDiv = styled.div`
    background-color: var(--grey1);
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    padding-left: 16px;
    display: flex;
    gap: 8px;
    border-radius: 8px;
    transition: 200ms;
    outline: solid 2px rgba(0,0,0,0);

    &:focus-within {
        outline: solid 2px var(--grey4);
    }
`;
const Input = styled.input`
    width: 100%;
    background: transparent;
    border: 0;
    
    &:focus {
        outline: 0;
    }
`;
export function Search(props) {
  const {
    t
  } = useTranslation('translation');
  return /*#__PURE__*/React.createElement(SearchDiv, null, /*#__PURE__*/React.createElement(MagnifyingGlass, {
    size: 16,
    weight: "bold",
    color: "var(--grey7)"
  }), /*#__PURE__*/React.createElement(Input, {
    type: 'search',
    value: props.value,
    onChange: props.onChange,
    placeholder: props.placeholder || t("search_placeholder")
  }));
}
Search.defaultProps = {
  value: '',
  onChange: () => {},
  placeholder: ''
};