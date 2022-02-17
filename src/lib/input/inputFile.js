import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { UploadSimple } from "phosphor-react";

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
    border: solid 2px ${props => props.error ? "var(--red9)" : "var(--grey2)"};
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    box-sizing: border-box;

    &:active{
        ${props => props.readOnly ? "" : "outline: solid 2px #3359FC"};
    }

    &::placeholder {
        color: #9c9da7;
    }

    &:hover {
        border: solid 2px ${props => props.error ? "var(--red9)" : "var(--teal1)"};
    }

    &:focus {
        outline: 0;
        border: solid 2px ${props => props.error ? "var(--red9)" : "var(--teal4)"};
    }
`

export function InputFile(props) {
    const [fileSelected, setFileSelected] = useState(false)
    const [fileName, setFileName] = useState("")
    const uploadFile = useRef()

    useEffect(() => {
        if (!props.uploadFile) setFileName('')
    }, [props.uploadFile])

    const onChange = (event) => {
        if (event.target.files) {
            setFileName(event.target.files[0].name)
            props.setUploadFile(event.target.files[0])
            setFileSelected(true)
        }
    }

    const onClick = (event) => {
        event.preventDefault();
        uploadFile.current.click()
    }

    return (
        <InputBlock>
            <Input ref={uploadFile} type="file" id="file" onChange={onChange}></Input>
            <InputBtn onClick={onClick}><UploadSimple size={24} color={fileSelected ? "var(--teal5)" : "var(--grey5)"} />{fileName || 'File Upload'}</InputBtn>
        </InputBlock>
    )
}

InputFile.defaultProps = {
    setUploadFile: () => { },
    uploadFile: {},
}