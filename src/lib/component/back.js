import { ArrowLeft } from "phosphor-react"
import styled from "styled-components"

const BackDiv = styled.div`
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
    top: 54px;
    left: 12px;

    &:hover {
        background-color: var(--greyPlaceholder);
    }
`

export function Back(props) {

    return (
        <BackDiv onClick={props.onClick}>
            <ArrowLeft size={28} color={props.color} />
        </BackDiv>
    )
}

Back.defaultProps = {
    onClick: () => window.history.back(),
    color: 'var(--grey8)'
}