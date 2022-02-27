import styled from "styled-components";
import { Spinner } from '../component/spinner';
import React from 'react';
import '../var.css'

interface BtnStyle {
    backgroundColor: string;
    backgroundColorHover: string;
    borderColor: string;
    borderColorHover: string;
    cursor: string;
}

const BtnSubmitDiv = styled.div<BtnStyle>`
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: fit-content;

    min-height: 36px;
    
    padding-left: 14px;
    border-radius: 8px;
    background-color: ${(props: BtnStyle) => props.backgroundColor};
    user-select: none;
    transition: 200ms;
    
    border: solid 1px ${(props:BtnStyle) => props.borderColor};
    cursor: ${(props: BtnStyle) => props.cursor};

    &:hover {
        background-color: ${(props:BtnStyle) => props.backgroundColorHover};
        border: solid 1px ${(props:BtnStyle) => props.borderColorHover};
    }
` 

interface SpinnerDiv {
    show?: boolean;
    size: number;
}

const SpinnerDiv = styled.div<SpinnerDiv>`
    display: flex;
    background-color: inherit;
    border-radius: 8px;
    transition: margin-right 400ms;
    margin-right: ${(props: SpinnerDiv) => props.show ? 0 : -props.size * 1.6}px;
 
    div {
        visibility: ${(props:SpinnerDiv) => props.show ? "visible" : "hidden"}
    }
`

interface BtnSubmitInput {
    color: string;
}

const BtnSubmitInput = styled.input<BtnSubmitInput>`
    z-index: 3;
    min-height: 36px;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: inherit;
    color: ${(props:BtnSubmitInput) => props.color};
    font-size: 15px;
    background-color: inherit;
    border: 0;
    font-weight: 800;
`

interface Button {
    isLoading: boolean | undefined;
    color: 'normal' | 'success' | 'error' | 'teal';
    variant: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
    label: string;
    onClick: () => void;
    type: 'button' | 'submit';
}

export function Button(props:Button) {
    const style = {
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        color: 'transparent',
        cursor: 'pointer',
    }
    
    if (props.disabled) {
        style.cursor = 'default'
        if (props.variant === 'text') {
            style.color = 'var(--grey4)'
        } else if (props.variant === 'outlined') {
            style.borderColor = 'var(--grey4)';
            style.borderColorHover = 'var(--grey4)';
            style.color = 'var(--grey4)'
        } else if (props.variant === 'contained') {
            style.backgroundColor = 'var(--grey3)';
            style.backgroundColorHover = 'var(--grey3)';
            style.color = 'var(--grey5)'
        }
    } else if (props.color === 'success') {
        if (props.variant === 'text') {
            style.color = 'var(--blue7)'
        } else if (props.variant === 'outlined') {
            style.borderColor = 'var(--blue6)';
            style.borderColorHover = 'var(--blue8)';
            style.backgroundColorHover = 'var(--blue0)';
            style.color = 'var(--blue7)'
        } else if (props.variant === 'contained') {
            style.backgroundColor = 'var(--blue7)';
            style.backgroundColorHover = 'var(--blue8)';
            style.color = 'var(--blue0)'
        }
    } else if (props.color === 'error') {
        if (props.variant === 'text') {
            style.color = 'var(--red7)'
        } else if (props.variant === 'outlined') {
            style.borderColor = 'var(--red6)';
            style.borderColorHover = 'var(--red8)';
            style.backgroundColorHover = 'var(--red0)';
            style.color = 'var(--red7)'
        } else if (props.variant === 'contained') {
            style.backgroundColor = 'var(--red7)';
            style.backgroundColorHover = 'var(--red8)';
            style.color = 'var(--red0)'
        }
    } else if (props.color === 'teal') {
        if (props.variant === 'text') {
            style.color = 'var(--teal7)'
        } else if (props.variant === 'outlined') {
            style.borderColor = 'var(--teal6)';
            style.borderColorHover = 'var(--teal8)';
            style.backgroundColorHover = 'var(--teal0)';
            style.color = 'var(--teal7)'
        } else if (props.variant === 'contained') {
            style.backgroundColor = 'var(--teal5)';
            style.backgroundColorHover = 'var(--teal6)';
            style.color = 'var(--teal0)'
        }
    } else if (props.color === 'normal') {
        if (props.variant === 'text') {
            style.color = 'var(--grey7)'
        } else if (props.variant === 'outlined') {
            style.borderColor = 'var(--grey7)';
            style.borderColorHover = 'var(--grey9)';
            style.backgroundColorHover = 'var(--grey0)';
            style.color = 'var(--grey7)'
        } else if (props.variant === 'contained') {
            style.backgroundColor = 'var(--grey3)';
            style.backgroundColorHover = 'var(--grey4)';
            style.color = 'var(--grey7)'
        }
    }

    return (
        <div>
            <BtnSubmitDiv {...style}>
                { props.isLoading !== undefined &&
                    <SpinnerDiv size={20} show={props.isLoading}>
                        <Spinner size={20} color={style.color} />
                    </SpinnerDiv>
                }
                <BtnSubmitInput type={props.type} value={props.label} onClick={props.onClick} {...style} />
            </BtnSubmitDiv>
        </div>
    )
}

Button.defaultProps = {
    color: "normal",
    type: 'button',
    variant: 'contained',
    label: 'label',
    onClick: (() => { }),
    isLoading: false,
}