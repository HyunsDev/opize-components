import { createContext, useState } from 'react'

export const UserContext =  createContext({
})

const UserContextProvider = ({ children }) => {
    const [user, SetUser] = useState({});
    const updateUser = async () => {
        SetUser({
            "name": "혀느현스",
            "email": "hyunsdev.test@gmail.com",
            "isVerified": true,
            "profileImage": "https://media.discordapp.net/attachments/937043660770529341/937044329342586890/9eee6f91e7c1e2ae.png",
            "isMarketingAccept": true,
            "currency": "KRW",
            "payments": [
                {
                    "method": "카드",
                    "cardCompany": "카카오뱅크",
                    "cardNumber": "949103******0000",
                    "status": "READY",
                    "isMainPayment": true
                }
            ],
            "subscribes": [],
            "isAdmin": true
        })
    }

    const initUser = async () => {
        if (user.name) {
            return
        }
        SetUser({
            "name": "혀느현스",
            "email": "hyunsdev.test@gmail.com",
            "isVerified": true,
            "profileImage": "https://media.discordapp.net/attachments/937043660770529341/937044329342586890/9eee6f91e7c1e2ae.png",
            "isMarketingAccept": true,
            "currency": "KRW",
            "payments": [
                {
                    "method": "카드",
                    "cardCompany": "카카오뱅크",
                    "cardNumber": "949103******0000",
                    "status": "READY",
                    "isMainPayment": true
                }
            ],
            "subscribes": [],
            "isAdmin": true
        })
    }

    const getUser = async (token = localStorage.getItem('token')) => {
        SetUser({
            "name": "혀느현스",
            "email": "hyunsdev.test@gmail.com",
            "isVerified": true,
            "profileImage": "https://media.discordapp.net/attachments/937043660770529341/937044329342586890/9eee6f91e7c1e2ae.png",
            "isMarketingAccept": true,
            "currency": "KRW",
            "payments": [
                {
                    "method": "카드",
                    "cardCompany": "카카오뱅크",
                    "cardNumber": "949103******0000",
                    "status": "READY",
                    "isMainPayment": true
                }
            ],
            "subscribes": [],
            "isAdmin": true
        })
    }

    return (
        <UserContext.Provider value={{ user, updateUser, getUser, initUser }}>
            {children}
        </UserContext.Provider>);
    };

export default UserContextProvider;