import React, { createContext, useState } from 'react'
import Homepage from 'Pages/Homepage'

export const UserContext = createContext();
const App = () => {
    const [theme, setTheme] = useState("theme-1")
    return (
        <div>
            <UserContext.Provider value={{ theme, setTheme }}>
                <Homepage />
            </UserContext.Provider>
        </div>
    )
}

export default App