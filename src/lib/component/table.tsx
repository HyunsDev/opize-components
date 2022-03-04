import styled from 'styled-components'
import { Checkbox } from '..'

const TableStyle = styled.table`
    width: 100%;
    text-align: left;
    border-spacing: 0px;

    thead {
        
    }

    tbody {

    }

    th {
        color: var(--grey6);
        padding: 8px 16px;
        font-size: 14px;
        border-bottom: solid 1px var(--grey3);
    }

    td {
        border: 0;
        padding: 8px 16px;
    }

    img { 
        height: 28px;
    }
`

interface TableButtonProp {
    type: 'button';
    onClick: () => any;
    label: string;
    color?: 'normal' | 'success' | 'error' | 'teal';
}

interface TableBadgeProp {
    label: string;
    color?: 'normal' | 'success' | 'error' | 'teal';
}

interface TableProp {
    column: string[],
    items: {
        [key: string]: null | string | number | boolean | TableButtonProp | {type: 'badge', value: TableBadgeProp[]};
    }[]
}

const TableButtonDiv = styled.div`
    color: ${(props:{color: string}) => props.color};
    font-weight: 800;
    cursor: pointer;
    transition: 200ms;
`

function TableButton(props:TableButtonProp) {
    const style = {
        color: 'var(--blue7)'
    }

    if (props.color === 'normal') {
        style.color = 'var(--grey7)'
    } else if (props.color === 'success') {
        style.color = 'var(--blue7)'
    } else if (props.color === 'error') {
        style.color = 'var(--red7)'
    } else if (props.color === 'teal') {
        style.color = 'var(--teal7)'
    } 

    return (
        <TableButtonDiv onClick={props.onClick} {...style}>
            {props.label}
        </TableButtonDiv>
    )
}

const TableBadgeDiv = styled.div`
    color: ${(props:{color: string, backgroundColor: string}) => props.color};
    background-color: ${(props:{color: string, backgroundColor: string}) => props.backgroundColor};
    padding: 4px 12px;
    font-weight: 800;
    transition: 200ms;
    width: fit-content;
    font-size: 14px;
    border-radius: 999px;
    user-select: none;
`

const TableBadges = styled.div`
    display: flex;
    gap: 8px;
`

function TableBadge(props:TableBadgeProp) {
    const style = {
        color: 'var(--blue7)',
        backgroundColor: 'var(--blue5)'
    }

    if (props.color === 'normal') {
        style.color = 'var(--grey7)'
        style.backgroundColor = 'var(--grey2)'
    } else if (props.color === 'success') {
        style.color = 'var(--blue7)'
        style.backgroundColor = 'var(--blue1)'
    } else if (props.color === 'error') {
        style.color = 'var(--red7)'
        style.backgroundColor = 'var(--red1)'
    } else if (props.color === 'teal') {
        style.color = 'var(--teal7)'
        style.backgroundColor = 'var(--teal1)'
    } 

    return (
        <TableBadgeDiv {...style}>
            {props.label}
        </TableBadgeDiv>
    )
}

export function Table(props: TableProp) {
    return (
        <>
            <TableStyle>
                <thead>
                    <tr>
                        {
                            props.column.map(e => <th>{e}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map(e => {
                            return <tr>{props.column.map((column) => {
                                const item = e[column]
                                if (typeof item === 'string') {
                                    if (item.includes('http') || item.includes('.png') || item.includes('.jpg')) {
                                        return <td><img src={item} alt='' /></td>
                                    } else {
                                        return <td>{item || '.'}</td>
                                    }
                                } else if (typeof item === 'number') {
                                    return <td>{item || '.'}</td>
                                } else if (typeof item === 'boolean') {
                                    return <td><Checkbox value={item} onChange={() => null} disabled /></td>
                                } else if (item && typeof item === "object" && item.type === 'button') {
                                    return <td><TableButton {...item} /></td>
                                } else if (item && typeof item === "object" && item.type === 'badge') {
                                    return <td><TableBadges>{item.value.map(badge => <TableBadge {...badge} />)}</TableBadges></td>
                                } else {
                                    return <td>{'.'}</td>
                                }
                            })}</tr>
                        })
                    }
                </tbody>
            </TableStyle>
        </>
    )
}