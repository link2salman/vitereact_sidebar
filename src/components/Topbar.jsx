import React from 'react'
import { useContext } from 'react';

import Input from './Input'
import { UserContext } from '../App';

const Topbar = () => {
    const value = useContext(UserContext);
    return (
        <div className='app-topbar' style={{ display: "flex", justifyContent: "space-between" }}>
            Topbar <div className="themes-controllers">
                <ul style={{ display: "flex", justifyContent: "space-between" }}>
                    <li style={{ cursor: "pointer", margin: "7px", textDecoration: "underline", width: "20px", height: "20px", background: "#0B2447", borderRadius: "50%" }} onClick={() => value.setTheme("theme-1")}></li>
                    <li style={{ cursor: "pointer", margin: "7px", textDecoration: "underline", width: "20px", height: "20px", background: "#0d1520", borderRadius: "50%" }} onClick={() => value.setTheme("theme-2")}></li>
                    <li style={{ cursor: "pointer", margin: "7px", textDecoration: "underline", width: "20px", height: "20px", background: "#06603b", borderRadius: "50%" }} onClick={() => value.setTheme("theme-3")}></li>
                    <li style={{ cursor: "pointer", margin: "7px", textDecoration: "underline", width: "20px", height: "20px", background: "#6941c6", borderRadius: "50%" }} onClick={() => value.setTheme("theme-4")}></li>
                    <li style={{ cursor: "pointer", margin: "7px", textDecoration: "underline", width: "20px", height: "20px", background: "#3438cd", borderRadius: "50%" }} onClick={() => value.setTheme("theme-5")}></li>
                </ul>
            </div>
        </div>
    )
}

export default Topbar