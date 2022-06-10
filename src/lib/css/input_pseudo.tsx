import { css } from "styled-components"

export const active = css<{outlineColor: string}>`
    outline: solid 0px ${props => props.outlineColor};
    &:focus {
        outline: solid 3px ${props => props.outlineColor};
    }
`