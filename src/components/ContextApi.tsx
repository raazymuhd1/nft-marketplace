"use client"
import { useState, use, createContext, ReactNode, Dispatch, SetStateAction } from 'react'
import { MappedState } from "@/types"

interface IProvider {
    children: ReactNode
}

const MarketContext = createContext({
    showProfile: false,
    setShowProfile: (value: boolean) => {},
    darkMode: false,
    setDarkMode: (value: boolean) => {}
});

const MarketContextProvider = ({children}: IProvider) => {
    const [showProfile, setShowProfile] = useState<boolean>(false)
    const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <MarketContext.Provider value={{
        showProfile,
        setShowProfile,
        darkMode,
        setDarkMode,
    }}>
       { children }
    </MarketContext.Provider>
  )
}

export default MarketContextProvider

export const useMarketContext = () =>  use(MarketContext)
