import { createContext, useState } from 'react'

export const DashboardContext =  createContext({
})

const DashContextProvider = ({ children }) => {
    const [dashboard, setDashboard] = useState({});

    const updateDashboard = async () => {
        setDashboard({
            "projects": {
                "notion_tools": {
                    "name": "Notion Tools",
                    "code": "notion_tools",
                    "url": "http://localhost:3002",
                    "icon": "https://static.opize.me/opize/1644939235460/logo.svg",
                    "desc": "노션툴즈",
                    "ruleUrl": "http://localhost:3002"
                }
            },
            "banners": [
                {
                    "to": "/",
                    "bannerUrl": "https://static.opize.me/opize/1644938476401/test_banner.png"
                },
                {
                    "to": "/",
                    "bannerUrl": "https://static.opize.me/opize/1644938172061/test_banner_2.png"
                }
            ]
        })
    }

    const initDashboard = async () => {
        if ('projects' in dashboard) {
            return
        }
        setDashboard({
            "projects": {
                "notion_tools": {
                    "name": "Notion Tools",
                    "code": "notion_tools",
                    "url": "http://localhost:3002",
                    "icon": "https://static.opize.me/opize/1644939235460/logo.svg",
                    "desc": "노션툴즈",
                    "ruleUrl": "http://localhost:3002"
                }
            },
            "banners": [
                {
                    "to": "/",
                    "bannerUrl": "https://static.opize.me/opize/1644938476401/test_banner.png"
                },
                {
                    "to": "/",
                    "bannerUrl": "https://static.opize.me/opize/1644938172061/test_banner_2.png"
                }
            ]
        })
    }

    return (
        <DashboardContext.Provider value={{ dashboard, updateDashboard, initDashboard }}>
            {children}
        </DashboardContext.Provider>);
    };

export default DashContextProvider;