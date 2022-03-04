import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectDiv = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    background-color: var(--grey1);
    border-radius: 8px;
    text-decoration: none;
    transition: 200ms;
`

const Info = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
`

const InfoDesc = styled.div`
    color: var(--grey6);
    font-size: 14px;
`

const Name = styled.div`
    color: var(--grey9);
    font-size: 20px;
    font-weight: 800;
    display: flex;
    align-items: center;

    span {
        margin-left: 4px;
        color: var(--teal5);
        font-size: 14px;
    }
`

const InDetail = styled.div`
    background-color: var(--grey9);
    color: var(--grey4);
    font-size: 14px;
    flex-direction: column;
    gap: 4px;
    display: flex;
    border-radius: 0 0 8px 8px;
    
    overflow-y: hidden;
    visibility : ${(props: {isFold: boolean}) => props.isFold ? 'hidden' : 'visible'};
    max-height: ${(props: {isFold: boolean}) => props.isFold ? '0px' : 'auto'};
    padding: ${(props: {isFold: boolean}) => props.isFold ? '0 0' : '20px 0px'};
    opacity: ${(props: {isFold: boolean}) => props.isFold ? 0 : 1};
    transition: 200ms;

    p {
        word-break: break-all;
        span {
            color: var(--teal5);
        }
    }

    pre {
        background-color: var(--grey9) !important;
        border-radius: 4px;
        font-size: 14px;
        padding: 0px 20px !important;
    }
`

const Links = styled.div`
    padding: 0px 16px;
    display: flex;
    justify-content: end;
    gap: 8px;
`

const IconDiv = styled.div`
    width: 52px;
    height: 52px;
    box-sizing: border-box;
    border-radius: 40px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 36px;
        width: 36px
    }
`
const ProjectInfo = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    gap: 16px;
    transition: 200ms;
    padding: 20px;
    cursor: pointer;
    user-select: none;
    border-radius: 8px 8px 0px 0px;
    &:hover {
        background-color: var(--grey2);
    }
`

const ProjectInfoMini = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    transition: 200ms;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 8px 8px 0px 0px;
    user-select: none;

    &:hover {
        background-color: var(--grey2);
    }

    & > div {
        gap: 8px;
        display: flex;
        align-items: center;
    }

    img {
        height: 16px;
    }
`

const MiniTitle = styled.div`
    font-size: 14px;
`

const MiniSubtitle = styled.div`
    color: var(--grey5);
        font-size: 12px;
`

const MiniInfo = styled.div`
    color: var(--teal5);
    font-size: 14px;
`

const A = styled.a`
    color: var(--teal5);
`

const LinkA = styled(Link)`
    color: var(--teal5);
`

interface CodeBlockIf {
    icon: string
    title: string;
    subtitle: string;
    desc: string;
    links?: {to: string, text: string}[];
    children: React.ReactNode | string;
    size: 'normal' | 'mini';
}

export function CodeBlock(props:CodeBlockIf) {
    const [isFold, setFold] = useState(true)

    return (
        <ProjectDiv>

            {props.size === 'normal' 
                ? <ProjectInfo onClick={() => setFold(!isFold)}>
                    <IconDiv>
                        <img src={props.icon} alt={props.title} />
                    </IconDiv>
                    <Info>
                        <Name>{props.title} <span>{props.subtitle}</span></Name>
                        <InfoDesc>{props.desc}</InfoDesc>
                    </Info>
                </ProjectInfo>
                : <ProjectInfoMini onClick={() => setFold(!isFold)}>
                    <div>
                        <img src={props.icon} alt={props.title} />
                        <MiniTitle>{props.title}</MiniTitle>
                        <MiniSubtitle>{props.subtitle}</MiniSubtitle>
                    </div>
                    <div>
                        <MiniInfo>{props.desc}</MiniInfo>
                    </div>
                </ProjectInfoMini>
            }

            

            <InDetail isFold={isFold}>
                <SyntaxHighlighter language="json" style={atelierLakesideDark}>
                    {props.children || ""}
                </SyntaxHighlighter>
                <Links>
                    {
                        props?.links?.map((e, i) => e.to.includes('http') ? <A key={i} href={e.to}>{e.text}</A> : <LinkA key={i} to={e.to || "/"}>{e.text}</LinkA>)
                    }
                </Links>
            </InDetail>
        </ProjectDiv>
    )
}

CodeBlock.defaultProps = {
    size: 'normal'
}