import React, { createContext, useState } from 'react'
import { Routes, Route } from "react-router-dom";

import Homepage from 'Pages/Homepage'


export const UserContext = createContext();
const App = () => {
    const [theme, setTheme] = useState("theme-1")
    return (
        <div>
            <UserContext.Provider value={{ theme, setTheme }}>
                <Routes>
                    <Route path="/" element={
                        <Homepage />
                    }
                    />
                </Routes>
            </UserContext.Provider>
        </div>
    )
}

export default App