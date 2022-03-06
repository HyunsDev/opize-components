import styled from "styled-components";

export const H1 = styled.h1`
    font-size: ${(props: {size:number}) => props.size}px;
    color: var(--grey9);
    font-weight: 800;
`
H1.defaultProps = {
    size: 32
}

export const H2 = styled.h2`
    font-size: ${(props: {size:number}) => props.size}px;
    color: var(--grey9);
    font-weight: 800;
    margin-top: 16px;
    margin-bottom: 8px;
`
H2.defaultProps = {
    size: 20
}

export const H3 = styled.h3`
    font-size: ${(props: {size:number}) => props.size}px;
    color: var(--grey9);
    font-weight: 800;
    margin-top: 16px;
    margin-bottom: 8px;
`
H3.defaultProps = {
    size: 16
}

interface TitleLabelIf {
    size: number;
    marginTop: number;
}
export const TitleLabel = styled.p`
    font-size: ${(props:TitleLabelIf) => props.size}px;
    color: var(--grey6);
    margin-top: ${(props:TitleLabelIf) => props.marginTop}px;
`
TitleLabel.defaultProps = {
    size: 14,
    marginTop: -8 
}