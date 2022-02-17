import styled from "styled-components";
import { Spinner } from '../component/spinner';
import React from 'react';

const BtnSubmitDiv = styled.div`
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

const SpinnerDiv = styled.div`
    display: flex;
    background-color: inherit;
    border-radius: 8px;
    transition: margin-right 400ms;
    margin-right: ${props => props.show ? 0 : -props.size * 1.6}px;
 
    div {
        visibility: ${props => props.show ? "visible" : "hidden"}
    }
`

const BtnSubmitInput = styled.input`
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

const BtnDivver = styled.div`
    
`

export function Btn(props) {
    return (
        <>
            <BtnDivver>
                <BtnSubmitDiv isLoading={props.isLoading} backgroundColor={props.backgroundColor} backgroundColorHover={props.backgroundColorHover}>
                    <SpinnerDiv size={20} show={props.isLoading}>
                        <Spinner size={20} color={props.color} show={props.isLoading} />
                    </SpinnerDiv>
                    <BtnSubmitInput show={props.isLoading} type={props.type} value={props.label} onClick={props.onClick} color={props.color} />
                </BtnSubmitDiv>
            </BtnDivver>
        </>
    )
}

Btn.defaultProps = {
    backgroundColor: "var(--grey3)",
    backgroundColorHover: 'var(--grey4)',
    color: "var(--grey9)",
    type: 'button',
    label: 'label',
    onClick: (() => { }),
    isLoading: false,
}

export function ColorBtn(props) {
    return (
        <Btn {...props} color='var(--teal0)' backgroundColor='var(--teal5)' backgroundColorHover='var(--teal6)' />
    )
}