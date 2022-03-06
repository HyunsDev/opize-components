import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import React from 'react';

const Div = styled.div`
    border-bottom: solid 1px var(--grey1);
    align-items: center;
    display: flex;
    position: relative;
    gap: 4px;
    margin-top: 8px;
`

const ItemDivver = styled.div`
    padding-bottom: 4px;
`

const Item = styled.div`
    padding: 4px 12px;
    cursor: pointer;
    border-radius: 8px;
    user-select: none;
    transition: 200ms;

    &:hover {
        background-color: var(--grey1);
    }
`

interface UnderLineIF {
    left: number;
    width: number;
}
const UnderLine = styled.div`
    position: absolute;
    transition: 100ms, left 200ms cubic-bezier(0, 0.61, 0.32, 1.49);
    bottom: 0;
    left: ${(props: UnderLineIF) => props.left || 0}px;
    width: ${(props: UnderLineIF) => props.width}px;
    height: 1px;
    border-bottom: solid 2px var(--grey9);
`

interface HorizonLNBInterface {
    selected: string;
    exact: boolean;
    menu: {id: string, onClick: () => any, label:string}[]
}
export function HorizonLNB(props:HorizonLNBInterface) {
    const DivRef = useRef<any>(null)
    const targets = useRef<any>({})
    const [select, setSelect] = useState<any>('')
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const res = props.menu.map(e => {
            if (props.exact) {
                if (e.id === props.selected) {
                    return props.selected
                }
            } else {
                if (props.selected.startsWith(e.id)) {
                    return e.id
                }
            }
            return null

        }).filter(Boolean)
        setSelect(res[res.length - 1])
    }, [props.selected, props.menu, props.exact])

    useEffect(() => {
        setWidth(targets.current[select]?.offsetWidth)
    }, [select, props.selected])

    return (
        <Div ref={DivRef}>
            {
                props.menu.map(e => {
                    return (
                        <ItemDivver key={e.id} ref={el => targets.current[e.id] = el}>
                            <Item onClick={e.onClick}>
                                {e.label}
                            </Item>
                        </ItemDivver>
                    )
                })
            }
            <UnderLine width={width} left={targets.current[select]?.getBoundingClientRect().left - DivRef.current?.getBoundingClientRect().left} />
        </Div>
    )
}

HorizonLNB.defaultProps = {
    menu: [],
    exact: false,
    selected: 'example1'
}