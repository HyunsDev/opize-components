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

const Input = styled.textarea`
    border-radius: 8px;
    outline: solid 2px ${(props: {error: boolean}) => props.error ? "var(--red9)" : "var(--grey2)"};
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    transition: outline 200ms, color 200ms;
    padding: 8px 16px;
    font-size: 16px;
    border: 0;
    color: var(--grey9);
    resize: vertical;
    min-height: 100px;

    &:hover {
        outline: solid 2px ${(props: {error: boolean}) => props.error ? "var(--red9)" : "var(--teal1)"};
    }

    &:focus {
        outline: solid 2px ${(props: {error: boolean}) => props.error ? "var(--red9)" : "var(--teal4)"};
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

interface TextAreaInterface {
    label?: string,
    placeholder?: string;
    error: boolean;
    message: string;
    value: string,
    onChange: () => null;

}

export function Textarea(props:TextAreaInterface) {
    return (
        <LoginDiv>
            {props.label && <Label>{props.label}</Label>}
            <Input placeholder={props.placeholder} error={props.error} value={props.value} onChange={props.onChange} />
            <Message error={props.error}>{props.message}</Message>
        </LoginDiv>
    )
}

Textarea.TextFiled = {
    placeholder: '',
    autoComplete: 'off',
    error: false,
    onChange: () => { },
}