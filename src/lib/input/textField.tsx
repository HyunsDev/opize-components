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

interface InputIf {
    error: boolean;
    variant: 'underlined' | 'outlined';
}

const Input = styled.input`
    border-radius: ${(props:InputIf) => props.variant === 'outlined' ? 8 : 0}px;
    border: ${(props:InputIf) => props.variant === 'outlined' ? 'solid 2px' : '0'};
    ${(props:InputIf) => props.variant === 'underlined' && 'border-bottom: solid 2px'};
    border-color: ${(props: InputIf) => props.error ? "var(--red9)" : "var(--grey2)"};
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    transition: 200ms;
    padding: 0px ${(props:InputIf) => props.variant === 'outlined' ? 16 : 8}px;
    font-size: 16px;
    color: var(--grey9);
    outline: 0;

    &:hover {
        outline: 0;
        border-color: ${(props: InputIf) => props.error ? "var(--red9)" : "var(--teal1)"};
    }

    &:focus {
        outline: 0;
        border-color: ${(props: InputIf) => props.error ? "var(--red9)" : "var(--teal4)"};
    }

    &::placeholder {
        color: var(--grey5)
    }
`

const Message = styled.div`
    height: 20px;
    color: ${(props: {error: boolean}) => props.error ? "var(--red9)" : "#2D6560"};
    font-size: 14px;
    margin-top: 4px;
`

interface TextFieldInterface {
    label?: string,
    variant: 'underlined' | 'outlined';
    type: 'email'| 'number' | 'password'| 'search' | 'tel' | 'url';
    autoComplete: 'on' | 'off' | 'name' | 'email' | 'username' | 'new-password' | 'current-password' | string;
    placeholder?: string;
    error: boolean;
    message: string;
    value: string,
    onChange: () => null;

}

export function TextField(props:TextFieldInterface) {
    return (
        <LoginDiv>
            {props.label && <Label>{props.label}</Label>}
            <Input variant={props.variant} type={props.type} autoComplete={props.autoComplete} placeholder={props.placeholder} error={props.error} value={props.value} onChange={props.onChange} />
            <Message error={props.error}>{props.message}</Message>
        </LoginDiv>
    )
}

TextField.TextFiled = {
    placeholder: '',
    variant: 'outlined',
    autoComplete: 'off',
    type: 'text',
    error: false,
    onChange: () => { },
}