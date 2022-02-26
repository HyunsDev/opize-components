import styled from "styled-components";
import { Spinner } from '../component/spinner';
import React from 'react';
import '../var.css'

interface BtnSubmitDiv {
    backgroundColor: string;
    isLoading: boolean;
    backgroundColorHover: string;
}

const BtnSubmitDiv = styled.div<BtnSubmitDiv>`
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 14px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: ${props => props.backgroundColor};
    font-weight: 800;
    user-select: none;
    transition: 200ms;
    min-height: 40px;
    border: 0;
    width: fit-content;
    cursor: ${props => props.isLoading ? "not-allowed" : "pointer"};

    &:hover {
        background-color: ${props => props.backgroundColorHover};
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
    margin-right: ${props => props.show ? 0 : -props.size * 1.6}px;
 
    div {
        visibility: ${props => props.show ? "visible" : "hidden"}
    }
`

interface BtnSubmitInput {
    color: string;
}

const BtnSubmitInput = styled.input<BtnSubmitInput>`
    z-index: 3;
    min-height: 40px;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: inherit;
    color: ${props => props.color};
    font-size: 15px;
    background-color: inherit;
    border: 0;
    font-weight: 800;
`

interface Btn {
    isLoading: boolean;
    backgroundColor: string;
    backgroundColorHover: string;
    color: string;
    label: string;
    onClick: () => void;
    type: 'button' | 'submit';
}

export function Btn(props:Btn) {
    return (
        <div>
            <BtnSubmitDiv isLoading={props.isLoading} backgroundColor={props.backgroundColor} backgroundColorHover={props.backgroundColorHover}>
                <SpinnerDiv size={20} show={props.isLoading}>
                    <Spinner size={20} color={props.color} />
                </SpinnerDiv>
                <BtnSubmitInput type={props.type} value={props.label} onClick={props.onClick} color={props.color} />
            </BtnSubmitDiv>
        </div>
    )
}

Btn.defaultProps = {
    backgroundColor: "var(--grey2)",
    backgroundColorHover: 'var(--grey3)',
    color: "var(--grey9)",
    type: 'button',
    label: 'label',
    onClick: (() => { }),
    isLoading: false,
}

export function ColorBtn(props:Btn) {
    return (
        <Btn {...props} color='var(--teal0)' backgroundColor='var(--teal5)' backgroundColorHover='var(--teal6)' />
    )
}