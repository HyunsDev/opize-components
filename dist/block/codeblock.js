import { useState } from 'react';
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
`;
const Info = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
`;
const InfoDesc = styled.div`
    color: var(--grey6);
    font-size: 14px;
`;
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
`;
const InDetail = styled.div`
    background-color: var(--grey9);
    color: var(--grey4);
    font-size: 14px;
    flex-direction: column;
    gap: 4px;
    display: flex;
    border-radius: 0 0 8px 8px;
    
    overflow-y: hidden;
    visibility : ${props => props.isFold ? 'hidden' : 'visible'};
    max-height: ${props => props.isFold ? '0px' : 'auto'};
    padding: ${props => props.isFold ? '0 0' : '20px 0px'};
    opacity: ${props => props.isFold ? 0 : 1};
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
`;
const Links = styled.div`
    padding: 0px 16px;
    display: flex;
    justify-content: end;
    gap: 8px;
`;
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
`;
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
`;
const A = styled.a`
    color: var(--teal5);
`;
const LinkA = styled(Link)`
    color: var(--teal5);
`;
export function Codeblock(props) {
  const [isFold, setFold] = useState(true);
  return /*#__PURE__*/React.createElement(ProjectDiv, null, /*#__PURE__*/React.createElement(ProjectInfo, {
    onClick: () => setFold(!isFold)
  }, /*#__PURE__*/React.createElement(IconDiv, null, /*#__PURE__*/React.createElement("img", {
    src: props.icon,
    alt: props.title
  })), /*#__PURE__*/React.createElement(Info, null, /*#__PURE__*/React.createElement(Name, null, props.title, /*#__PURE__*/React.createElement("span", null, props.code)), /*#__PURE__*/React.createElement(InfoDesc, null, props.desc))), /*#__PURE__*/React.createElement(InDetail, {
    isFold: isFold
  }, /*#__PURE__*/React.createElement(SyntaxHighlighter, {
    language: "json",
    style: atelierLakesideDark
  }, props.children || ""), /*#__PURE__*/React.createElement(Links, null, props?.links?.map((e, i) => e.to.includes('http') ? /*#__PURE__*/React.createElement(A, {
    key: i,
    href: e.to
  }, e.text) : /*#__PURE__*/React.createElement(LinkA, {
    key: i,
    to: e.to || "/"
  }, e.text)))));
}
Codeblock.defaultProps = {
  icon: '',
  title: '',
  subtitle: '',
  desc: '',
  links: []
};