"use client"
import { useState, use, createContext, ReactNode, Dispatch, SetStateAction } from 'react'
import { MappedState } from "@/types"

interface IProvider {
    children: ReactNode
}

const MarketContext = createContext({
    showProfile: false,
    setShowProfile: (value: boolean) => {
        if(typeof this != "undefined") {
            this.showProfile = value
        }
    }
});

const MarketContextProvider = ({children}: IProvider) => {
    const [showProfile, setShowProfile] = useState<boolean>(false)

  return (
    <MarketContext.Provider value={{
        showProfile,
        setShowProfile
    }}>
       { children }
    </MarketContext.Provider>
  )
}

export default MarketContextProvider

export const useMarketContext = () =>  use(MarketContext)
