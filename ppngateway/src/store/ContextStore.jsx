import { createContext, useState } from "react";

export const StateContext = createContext({
    sidebarOpen: false,
    handleSideOpen: () => {},
    isLoggedIn: true,
    setIsLoggedIn: () => {},
    darkMode: true,
    setDarkMode: () => {}
})


function StateContextProvider({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [darkMode, setDarkMode] = useState(true)

    const handleSideOpen = () => {
        setSidebarOpen((prev) => {
            return !prev
        })
    }

    const ctxValue = {
        sidebarOpen: sidebarOpen,
        handleSideOpen: handleSideOpen,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        darkMode: darkMode,
        setDarkMode: setDarkMode
    }
    return <StateContext.Provider value={ctxValue}>
        {children}
    </StateContext.Provider>
}

const StateContextConsumer = StateContext.Consumer

export {StateContextProvider, StateContextConsumer}