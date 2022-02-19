import styled from "styled-components"
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { ArrowRight } from 'phosphor-react'
import React from 'react';

import { Dropdown } from "../button/dropdown";

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
    transition: 200ms;
    border-bottom: solid 1px ${props => props.isTop ? "rgba(0,0,0,0)" : "var(--grey2)"} ;
    background-color: ${props => props.isTop ? "transparent" : "#ffffff"};
`

const Items = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 8px;
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

export function Header(props) {
    const { t } = useTranslation('translation')
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
                {props.menus.map((e, i) => <MenuBtn to={e.to} key={i}>{e.label}</MenuBtn>)}
                {
                    props.isLogin
                        ? <Dropdown direction='right' label={props.user.name} img={props.user.profileImage} menus={props.userMenus} />
                        : props.loginTo.includes('http')
                            ? <LoginBtnA href={props.loginTo}>{t('login')}<ArrowRight size={20} weight="bold" /></LoginBtnA> 
                            : <LoginBtn to={props.loginTo}>{t('login')}<ArrowRight size={20} weight="bold" /></LoginBtn> 
                }
            </Items>
        </Divver>
    )
}

Header.defaultProps = {
    isLogin: false,
    loginTo: '/login',
    projects: {
        example: {
            to: '/',
            img: 'https://static.opize.me/opize.png',
            label: 'example Project'
        }
    },
    subComponents: [],
    menus: [],
    userMenus: [],
    app: 'example',
    user: {
        name: 'example user',
        profileImage: 'https://static.opize.me/opize/1645012676462/opize-circle.png',
    }
}