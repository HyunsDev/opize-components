import styled from "styled-components";
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${props => props.marginTop}px;
`;
const Left = styled.div`
    width: 250px;
    font-size: 16px;
    display: flex;
    padding-top: 8px;
`;
const Right = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 40px;
    width: 100%;
    gap: 8px;
`;
export function HorizontalLayout(props) {
  return /*#__PURE__*/React.createElement(Div, {
    marginTop: props.marginTop
  }, /*#__PURE__*/React.createElement(Left, null, props.label), /*#__PURE__*/React.createElement(Right, null, props.children));
}
HorizontalLayout.defaultProps = {
  label: 'label',
  marginTop: 0
};