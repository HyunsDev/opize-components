import styled from "styled-components"
import React from 'react';
import { active } from "../css/input_pseudo";

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

const map = {
    borderRadius: {
        underlined: '0px',
        outlined: '4px',
    },
    border: {
        underlined: '0',
        outlined: 'solid 2px',
    },
    borderBottom: {
        underlined: 'solid 2px',
        outlined: ''
    },
    borderColor: {
        error: 'var(--red9)',
        normal: 'var(--grey2)'
    }
}

// TODO: 이거 map방식으로 바꾸고 input_pseudo.tsx 모듈 사용하기
const Input = styled.input<InputIf>`
    border-radius: ${(props) => map.borderRadius[props.variant]};
    border: ${(props) => map.border[props.variant]};
    border-bottom: ${(props) => map.borderBottom[props.variant]};
    border-color: ${(props) => map.borderColor[props.error ? 'error' : 'normal']};

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

TextField.defaultProps = {
    placeholder: '',
    variant: 'outlined',
    autoComplete: 'off',
    type: 'text',
    error: false,
    onChange: () => null,
}