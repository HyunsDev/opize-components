import styled from 'styled-components';

const ProjectDiv = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    background-color: ${props => props.status === "unsubscribed" ? 'var(--red1)' : 'var(--grey1)'};
    border-radius: 8px;
    text-decoration: none;
    transition: 200ms;
    justify-content: space-between;
    padding: 20px;
    border-radius: 8px;
`

const Info = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
`

const InfoDesc =styled.div`
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
    /* &:hover {
        background-color: var(--grey2);
    } */
`

const Right = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
`

const PlanInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
`

const PlanPrice = styled.div`
    color: var(--grey9);
    font-weight: 800;
`

const PlanDesc = styled.div`
    font-size: 14px;
    color: var(--grey7);
`

const PlanBtn = styled.div`
    min-width: 52px;
    min-height: 52px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 100%;
    transition: 200ms;
    
    &:hover {
        background-color: var(--greyPlaceholder)
    }
`

export function SubscribeBlock(props) {
    return (
        <ProjectDiv status={props.status}>
            <ProjectInfo>
                <IconDiv>
                    <img src={props.product.icon} alt={props.product.name} />
                </IconDiv>
                <Info>
                    <Name>{props.product.name}</Name>
                    <InfoDesc>{props.project.name}</InfoDesc>
                </Info>
            </ProjectInfo>
            <Right>
                <PlanInfo>
                    <PlanPrice>{props.desc1}</PlanPrice>
                    <PlanDesc>{props.desc2}</PlanDesc>
                </PlanInfo>
                {props.btnIcon ? <PlanBtn onClick={props.onClick}>{props.btnIcon}</PlanBtn> : <></>}
            </Right>
        </ProjectDiv>
    )
}

SubscribeBlock.defaultProps = {
    status: '',
    product: {
        icon: '',
        name: '',
        prices: {
            KRW: ''
        }
    },
    project: {
        name: '',
        desc: '',
    },
    desc1: '',
    desc2: '',
    btnIcon: null,
}