import styled from "styled-components";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from "react";
import { Link } from 'react-router-dom';
const Div = styled.div`
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
`;
const Id = styled.span`
    color: var(--grey5);
    font-size: 12px;
`;
const Name = styled.span`
    font-size: 14px;
`;
const Email = styled.span`
    color: var(--teal5);
    font-size: 14px;
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
const A = styled.a`
    color: var(--teal5);
`;
const LinkA = styled(Link)`
    color: var(--teal5);
`;
export function MiniCodeBlock(props) {
  const [isFold, setFold] = useState(true);
  return /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Info, {
    onClick: () => setFold(!isFold)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Name, null, props.title), /*#__PURE__*/React.createElement(Id, null, props.subTitle)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Email, null, props.info))), /*#__PURE__*/React.createElement(InDetail, {
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
MiniCodeBlock.defaultProps = {
  title: '',
  subTitle: '',
  info: '',
  links: []
};