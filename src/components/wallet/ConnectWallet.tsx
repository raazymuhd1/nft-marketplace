"use client"
import {useState} from 'react'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useMarketContext } from "../ContextApi"

const ConnectWallet = () => {
    //   @ts-ignore
    const { setShowProfile } = useMarketContext();

  return (
      <ConnectButton.Custom
      >
        {({ account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted}) => {
            const connected = mounted && account && chain;
            console.log(chain)
            return (
              <button
                onClick={() => {
                   console.log("showing profile")
                   setShowProfile(true)
                }}
                className="flex-row-center gap-[10px] outline-none radius py-[5px] px-[10px] border-[1px]">
                  <MdOutlineAccountBalanceWallet size={24} />
                  { account ? account.address : "Connect Wallet"}
              </button>
            )
          }}
      </ConnectButton.Custom>
  )
}

export default ConnectWallet