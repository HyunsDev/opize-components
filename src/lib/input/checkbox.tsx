import styled from "styled-components"
import React from 'react';

const CheckBoxDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const Input = styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const Icon = styled.svg`
    fill: none;
    stroke: var(--grey1);
    stroke-width: 2px;
`;

interface FakeCheckBoxIF {
    backgroundColor: string;
    backgroundColorHover: string;
    borderColor: string;
    borderColorHover: string;
    checked: boolean;
}

const FakeCheckBox = styled.div`
    display: inline-block;
    min-width: 24px; 
    width: 24px;
    height: 24px;
    border: solid 1px ${(props: FakeCheckBoxIF) => props.borderColor};
    background: ${(props: FakeCheckBoxIF) => props.backgroundColor};
    border-radius: 8px;
    transition: 200ms;
    cursor: pointer;

    &:hover {
        border: solid 1px ${(props: FakeCheckBoxIF) => props.borderColorHover};
    }

    ${Icon} {
        visibility: ${(props: FakeCheckBoxIF) => props.checked ? 'visible' : 'hidden'};
    }
`

const Label = styled.div`
    font-size: 14px;
    color: #747474;

    a {
        color: #747474;
    }
`

interface CheckboxIF {
    value: boolean;
    onChange: any;
    label: string;
    disabled: boolean;
}

export function Checkbox(props: CheckboxIF) {
    const style = {
        backgroundColor: '',
        backgroundColorHover: '',
        borderColor: '',
        borderColorHover: '',
    }

    if (props.value) {
        if (props.disabled) {
            style.backgroundColor = 'var(--grey5)'
            style.backgroundColorHover = 'var(--grey5)'
            style.borderColor = 'var(--grey5)'
            style.borderColorHover = 'var(--grey5)'
        } else {
            style.backgroundColor = 'var(--teal5)'
            style.backgroundColorHover = 'var(--teal6)'
            style.borderColor = 'var(--teal5)'
            style.borderColorHover = 'var(--teal6)'
        }
    } else {
        if (props.disabled) {
            style.borderColor = 'var(--grey4)'
            style.borderColorHover = 'var(--grey4)'
        } else {
            style.borderColor = 'var(--grey7)'
            style.borderColorHover = 'var(--grey8)'
        }
    }

    return (
        <CheckBoxDiv>
            <Input type={'checkbox'} checked={props.value} onChange={props.onChange} disabled={props.disabled} />
            <FakeCheckBox {...style} checked={props.value} onClick={() => props.onChange(!props.value)} >
                <Icon viewBox="0 0 24 24">
                    <polyline points="19 7 10 17 5 12" />
                </Icon>
            </FakeCheckBox>
            <Label>{props.label}</Label>
        </CheckBoxDiv>
    )
}

Checkbox.defaultProps = {
    value: true,
    onChange: () => null,
    label: '',
    disabled: false
}