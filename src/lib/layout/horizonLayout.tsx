import styled from "styled-components";
import React from 'react';

interface HorizontalLayoutInterface {
    marginTop: number;
    label: string;
    children: React.ReactNode
}

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${(props: {marginTop: number}) => props.marginTop}px;
    gap: 8px;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const Left = styled.div`
    width: 250px;
    font-size: 16px;
    display: flex;
    padding-top: 8px;
`

const Right = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 40px;
    width: 100%;
    gap: 8px;
`

export function HorizonLayout(props: HorizontalLayoutInterface) {
    return (
        <Div marginTop={props.marginTop}>
            <Left>
                {props.label}
            </Left>
            <Right>
                {props.children}
            </Right>
        </Div>
    )
}

HorizonLayout.defaultProps = {
    label: 'label',
    marginTop: 0
}