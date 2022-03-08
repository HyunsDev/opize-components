import styled from "styled-components"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from 'phosphor-react'
import React from 'react';
import { useMediaQuery } from "react-responsive"

import { Dropdown } from "../input/dropdown";
import MenuImg from "../assets/list.svg";

const Divver = styled.div`
    display: flex;
    z-index: 10;
    box-sizing: border-box;
    width: 100vw;
    height: 52px;
    justify-content: space-between;
    padding: 0px 8px;
    position: fixed;
    top: 0;
    left: 0;
    transition: 200ms;
    border-bottom: solid 1px ${(props: {isTop: boolean}) => props.isTop ? "rgba(0,0,0,0)" : "var(--grey2)"} ;
    background-color: ${(props: {isTop: boolean}) => props.isTop ? "transparent" : "#ffffff"};
`

const Items = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 8px;
    @media (max-width: 600px) {
        gap: 0px;
    }
`

const MenuBtn = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px;
    border-radius: 8px;
    transition: 200ms;
    color: var(--grey9);
    font-size: 14px;
    min-height: 36px;
    box-sizing: border-box;

    	
    @media (max-width: 600px) {
        display: none;
    }
    
    &:hover {
        background-color: var(--greyPlaceholder)
    }
`

const SubComponent = styled.div`
    @media (max-width: 600px) {
        display: none;
    }
`

const LoginBtn = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px;
    border-radius: 8px;
    transition: 200ms;
    color: #2D6560;
    font-weight: 800;
    gap: 8px;
    font-size: 14px;

    &:hover {
        background-color: rgba(0,0,0,0.08)
    }
`

const LoginBtnA = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px;
    border-radius: 8px;
    transition: 200ms;
    color: #2D6560;
    font-weight: 800;
    gap: 8px;
    font-size: 14px;

    &:hover {
        background-color: rgba(0,0,0,0.08)
    }
`

const Mobile = (props: {children: React.ReactNode}) => {
    const isMobile = useMediaQuery({
        maxWidth: 767
    });
    return (<>{isMobile && props.children}</>)
}
    
const PC = (props: {children: React.ReactNode}) => {
    const isPc = useMediaQuery({
      minWidth: 768
    });
    return <>{isPc && props.children}</>
}

const MobileDropdown = styled.div`
    &>div>div:first-child {
        padding: 8px
    }
`

const CTAButtonDiv = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 18px;
    transition: 200ms;
    color: var(--grey9);
    font-size: 14px;
    min-height: 36px;
    box-sizing: border-box;
    border: solid 1px var(--grey5);

    @media (max-width: 600px) {
        display: none;
    }
    
    &:hover {
        background-color: var(--greyPlaceholder)
    }
`
const CTAButtonA = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 18px;
    transition: 200ms;
    color: var(--grey9);
    font-size: 14px;
    min-height: 36px;
    box-sizing: border-box;
    border: solid 1px var(--grey5);
    	
    @media (max-width: 600px) {
        display: none;
    }
    
    &:hover {
        background-color: var(--greyPlaceholder)
    }
`

const CTAButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 8px;
    transition: 200ms;
    color: var(--grey9);
    font-size: 14px;
    min-height: 36px;
    box-sizing: border-box;
    border: solid 1px var(--grey5);
    	
    @media (max-width: 600px) {
        display: none;
    }
    
    &:hover {
        color: var(--grey0);
        background-color: var(--grey9)
    }
`

interface CTAButtonIF {
    to?: string;
    label: string;
    onClick?: () => any;
}

function CTAButton(props: CTAButtonIF) {
    if (props?.label) {
        if (props.to) {
            if (props.to.includes('http')) {
                return <CTAButtonA href={props.to}>{props.label}</CTAButtonA>
            } else {
                return <CTAButtonLink to={props.to}>{props.label}</CTAButtonLink>
            }
        } else {
            return <CTAButtonDiv onClick={props.onClick}>{props.label}</CTAButtonDiv>
        }
    } else {
        return <></>
    }
}

interface UserIF {
    img: string;
    menus: {label: string, to: string}[];
    isLogin: boolean;
    name: string;
    login: {
        to: string,
        label: string;
    }
}

function User(props:UserIF) {
    const isPc = useMediaQuery({
        minWidth: 768
      });

    if (props.isLogin) {
        // 로그인
        if (isPc) {
            return <Dropdown direction='right' img={props.img} menus={props.menus} />
        } else {
            return (
                <MobileDropdown>
                    <Dropdown direction='right' img={props.img} menus={props.menus} />
                </MobileDropdown>
            )
        }
    } else {
        // 비로그인
        if (props.login.to.includes('http')) {
            return <LoginBtnA href={props.login.to}>{props.login.label}<ArrowRight size={20} weight="bold" /></LoginBtnA> 
        } else {
            return <LoginBtn to={props.login.to}>{props.login.label}<ArrowRight size={20} weight="bold" /></LoginBtn>
        }
    }
}

interface HeaderIf {
    projects: {
        [key: string]: {
            to: string,
            img: string,
            label: string
        }
    },
    subComponents: React.ReactNode[],
    menus: {label: string, to: string}[],
    app: string,
    cta: CTAButtonIF,
    user: UserIF,
}

export function Header(props:HeaderIf) {
    const [isTop, setIsTop] = useState(true)

    const onScroll = () => {
        setIsTop(window.scrollY === 0)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <Divver isTop={isTop}>
            <Items>
                <Dropdown {...props.projects[props.app]} menus={Object.values(props.projects)} />
                {
                    props.subComponents.map((e, i) => <SubComponent key={i}>{e}</SubComponent>)
                }
            </Items>
            <Items>
                <PC>
                    {props.menus.map((e, i) => <MenuBtn to={e.to} key={i}>{e.label}</MenuBtn>)}
                </PC>
                <Mobile>
                    <MobileDropdown><Dropdown direction='right' img={MenuImg} menus={props.menus.map(e => ({to: e.to, label: e.label})) } /></MobileDropdown>
                </Mobile>
                <CTAButton {...props.cta} />
                <User {...props.user} />
            </Items>
        </Divver>
    )
}

Header.defaultProps = {
    projects: {
        example: {
            to: '/',
            img: 'https://static.opize.me/opize.png',
            label: 'example Project'
        }
    },
    subComponents: [],
    menus: [],
    app: 'example',
    cta: {},
    user: {
        isLogin: false,
        login: {
            to: '',
            label: ''
        },
        name: 'example user',
        img: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
        menus: []
    },
}