import styled from "styled-components";

const PageDivver = styled.div`
    margin: 0 auto;
    width: ${props => props.width}px;
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