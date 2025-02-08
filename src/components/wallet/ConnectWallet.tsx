import React from 'react'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const ConnectWallet = () => {
  return (
    <button 
      className="flex items-center gap-[10px] border-[1px] outline-none rounded-[10px] py-[5px] px-[10px] font-semibold">
        <MdOutlineAccountBalanceWallet size={24} />
        Connect Wallet
    </button>
  )
}

export default ConnectWallet