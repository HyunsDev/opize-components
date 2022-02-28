import styled from 'styled-components';
import { MagnifyingGlass } from 'phosphor-react';
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
    outline: solid 1px rgba(0,0,0,0);

    box-shadow: 0px 8px 16px rgba(0,0,0,0);

    &:hover {
        background-color: var(--grey0);
        outline: solid 1px var(--teal1);
        box-shadow: 0px 8px 16px rgba(0,0,0,0.04);
    }

    &:focus-within {
        background-color: var(--grey0);
        outline: solid 1px var(--teal5);
        box-shadow: 0px 8px 16px rgba(0,0,0,0.08);
    }
`

const Input = styled.input`
    width: 100%;
    background: transparent;
    border: 0;
    
    &:focus {
        outline: 0;
    }
`

interface SearchIF {
    value: string;
    onChange: () => null;
    placeholder: string;
}

export function Search(props:SearchIF) {
    return (
        <SearchDiv>
            <MagnifyingGlass size={16} weight='bold' color='var(--grey7)' />
            <Input type={'search'} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
        </SearchDiv>
    )
}

Search.defaultProps = {
    value: '',
    onChange: () => {},
    placeholder: 'search'
}