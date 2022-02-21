import styled from "styled-components";

export const H1 = styled.h1`
    font-size: ${props => props.size || 32}px;
    color: var(--grey9);
    font-weight: 800;
`

export const H2 = styled.h2`
    font-size: ${props => props.size || 20}px;
    color: var(--grey9);
    font-weight: 800;
    margin-top: 16px;
    margin-bottom: 8px;
`

export const H3 = styled.h3`
    font-size: ${props => props.size || 16}px;
    color: var(--grey9);
    font-weight: 800;
    margin-top: 16px;
    margin-bottom: 8px;
`

export const TitleLabel = styled.p`
    font-size: ${props => props.size || 14}px;
    color: var(--grey6);
    margin-top: ${props => props.marginTop || -8}px;
`