import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { UploadSimple } from "phosphor-react";
import React from 'react';

const InputBlock = styled.div`
    font-size: 14px;
    width: 100%;
`

const Input = styled.input`
    display: none;
`

const InputBtn = styled.div`
    padding: 0 16px;
    height: 40px;
    border-radius: 8px;
    transition: 200ms;
    border-radius: 8px;
    border: solid 2px ${(props: {isSelected: boolean}) => props.isSelected ? 'var(--teal1)' : 'var(--grey2)'};
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    box-sizing: border-box;

    &:active{
        outline: solid 2px #3359FC;
    }

    &::placeholder {
        color: #9c9da7;
    }

    &:hover {
        border: solid 2px var(--teal2);
    }

    &:focus {
        outline: 0;
        border: solid 2px var(--teal4);
    }
`

interface InputFileIF {
    value: {
        lastModified: number;
        lastModifiedDate: any;
        name: string;
        size: number;
        type: string;
        webkitRelativePath: string;
    } | null;
    onChange: any;
    label: string;
}

export function InputFile(props:InputFileIF) {
    const [fileSelected, setFileSelected] = useState(false)
    const uploadFile = useRef<any>(null)

    const onChange = (event: any) => {
        const { files } = event.target;
        if (files) {
            props.onChange(files[0])
            setFileSelected(true)
        }
    }

    const onClick = (event: any) => {
        event.preventDefault();
        uploadFile.current.click()
    }

    return (
        <InputBlock>
            <Input ref={uploadFile} type="file" id="file" onChange={onChange}></Input>
            <InputBtn onClick={onClick} isSelected={fileSelected}><UploadSimple size={24} color={fileSelected ? "var(--teal5)" : "var(--grey5)"} />{props?.value?.name || props.label}</InputBtn>
        </InputBlock>
    )
}

InputFile.defaultProps = {
    onChange: () => null,
    value: null,
    label: '파일 업로드'
}