import styled from "styled-components";
import React from 'react';

const PageDivver = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: ${props => props.width + 12}px;
    box-sizing: border-box;
    padding: 0px 6px;
    margin-top: 100px;
    margin-bottom: 100px;
`

export function Page(props) {
    return (
        <PageDivver width={props.width}>
            {props.children}
        </PageDivver>
    )
}

Page.defaultProps = {
    width: 600,
}