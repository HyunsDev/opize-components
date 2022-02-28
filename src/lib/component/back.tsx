import { ArrowLeft } from "phosphor-react"
import styled from "styled-components"
import React from 'react';

interface BackDiVIF {
    top: number;
    left: number;
}

const BackDiv = styled.div<BackDiVIF>`
    position: fixed;
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 200ms;
    border-radius: 25px;
    cursor: pointer;
    z-index: 50;

    top: ${(props: BackDiVIF) => props.top}px;
    left: ${(props: BackDiVIF) => props.left}px;

    &:hover {
        background-color: var(--greyPlaceholder);
    }
`

interface BackIF {
    onClick: () => null;
    color: string;
    top: number;
    left: number;
}

export function Back(props:BackIF) {
    return (
        <BackDiv onClick={props.onClick} top={props.top} left={props.left}>
            <ArrowLeft size={28} color={props.color} />
        </BackDiv>
    )
}

Back.defaultProps = {
    onClick: () => window.history.back(),
    top: 54,
    left: 12,
    color: 'var(--grey8)'
}