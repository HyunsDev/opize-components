import styled from "styled-components"
import React from 'react';

const LoginDiv = styled.div`
    width: 100%;
`

const Label = styled.div`
    color: #747474;
    font-size: 14px;
    margin-bottom: 8px;
`

const Input = styled.input`
    border-radius: 8px;
    outline: solid 2px ${props => props.error ? "var(--red9)" : "var(--grey2)"};
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    transition: 200ms;
    padding: 0px 16px;
    font-size: 16px;
    border: 0;
    color: var(--grey9);

    &:hover {
        outline: solid 2px ${props => props.error ? "var(--red9)" : "var(--teal1)"};
    }

    &:focus {
        outline: solid 2px ${props => props.error ? "var(--red9)" : "var(--teal4)"};
    }
`

const Message = styled.div`
    height: 20px;
    color: ${props => props.error ? "var(--red9)" : "#2D6560"};
    font-size: 14px;
    margin-top: 4px;
`

export function TextField(props) {
    return (
        <LoginDiv>
            <Label>{props.label}</Label>
            <Input type={props.type} autoComplete={props.autoComplete} placeholder={props.placeholder} error={props.error} value={props.value} onChange={props.onChange} />
            <Message error={props.error}>{props.error?.message}</Message>
        </LoginDiv>
    )
}

TextField.TextFiled = {
    label: 'label',
    placeholder: '',
    autoComplete: 'on',
    type: 'text',
    onChange: () => { },
}