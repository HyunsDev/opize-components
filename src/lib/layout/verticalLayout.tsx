import styled from "styled-components";
import React from 'react';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: ${(props: {marginTop: number}) => props.marginTop}px;
    gap: 8px;
`

const Title = styled.div`
    width: 250px;
    font-size: 16px;
    display: flex;
    padding-top: 8px;
`

const Children = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    gap: 8px;
`

interface VerticalLayoutInterface {
    marginTop: number;
    label: string;
    children: React.ReactNode
}

export function VerticalLayout(props:VerticalLayoutInterface) {
    return (
        <Div marginTop={props.marginTop}>
            <Title>
                {props.label}
            </Title>
            <Children>
                {props.children}
            </Children>
        </Div>
    )
}

VerticalLayout.defaultProps = {
    label: 'label',
    marginTop: 0
}