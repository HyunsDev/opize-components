import styled from 'styled-components';
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
    border-radius: 8px 8px 0px 0px;

    & > div {
        gap: 8px;
        display: flex;
        align-items: center;
    }
`;
const Subtitle = styled.span`
    color: var(--grey5);
    font-size: 12px;
`;
const Title = styled.span`
    font-size: 14px;
`;
const Btn = styled.span`
    color: ${props => props.color || 'var(--teal5)'};
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`;
const Children = styled.div`
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export function MiniBtnsBlock(props) {
  return /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Info, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Title, null, props.title), /*#__PURE__*/React.createElement(Subtitle, null, props.subtitle)), /*#__PURE__*/React.createElement("div", null, props.btns.map((e, i) => /*#__PURE__*/React.createElement(Btn, {
    key: i,
    color: e.color,
    onClick: e.onClick
  }, e.label)))), props.children && /*#__PURE__*/React.createElement(Children, null, props.children));
}
MiniBtnsBlock.defaultProps = {
  title: '',
  subtitle: '',
  btns: []
};