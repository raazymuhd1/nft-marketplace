"use client"
import {useState} from 'react'
import Image from "next/image"
import { eth } from '@/assets'
import NetworkLists from "./NetworkLists"
import { Chain } from '@/types'

const Networks = () => {
    const [showChains, setShowChains] = useState<Chain>({
       visible: false,
       name: "Ethereum",
       chainId: 1,
       logo: eth
    });

    console.log(showChains)

  return (
    <div className={`relative top-0`}>
       <div 
        onClick={() => setShowChains({ ...showChains, visible: !showChains.visible })}
        className="flex items-center gap-[10px] cursor-pointer">
          <Image src={eth} alt="network" className="w-[22px] h-[22px] rounded-[50%]" />
          <h4 className="font-semibold"> Ethereum </h4>
       </div>

       <NetworkLists showChains={showChains} setShowChains={setShowChains} />
    </div>
  )
}

export default Networks