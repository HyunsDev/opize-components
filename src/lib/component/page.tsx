import styled from "styled-components";
import React from 'react';

interface DivverProps {
    width: string | number;
    marginTop?: number
}

const Divver = styled.div`
    max-width: ${(props: DivverProps) => props.width};
    margin: 100px auto;
    ${(props:DivverProps) => props.marginTop && `margin-top: ${props.marginTop}px;`}
    box-sizing: border-box;
    padding: 0px 6px;
`

interface PageProps {
    children: React.ReactNode;
    width: number | 'normal' | 'wide' | 'full';
    marginTop?: number
}

export function Page(props: PageProps) {
    let width
    if (typeof props.width === 'number') {
        width = props.width + 12
    } else {
        if (props.width === 'normal') width = 700 + 12;
        else if (props.width === 'wide') width = 960 + 12;
        else if (props.width === 'full') width = '100vw';
        else width = 700 + 12
    }

    return (
        <Divver width={width} marginTop={props.marginTop}>
            {props.children}
        </Divver>
    )
}

Page.defaultProps = {
    width: 'normal'
}