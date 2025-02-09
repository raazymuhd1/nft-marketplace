import React, { SetStateAction, Dispatch } from 'react'
import Image from "next/image"
import { networkLists } from '@/utils/constants'
import { Chain } from '@/types'

interface IProps {
   showChains: Chain;
   setShowChains: Dispatch<SetStateAction<Chain>>;
}

const NetworkLists = ({showChains, setShowChains}: IProps) => {
  return (
    <section className={`${showChains.visible ? "flex-row-center opacity-[1] top-[50px] absolute" : "hidden opacity-0 top-[0px]"} w-[300px] gap-[15px] p-[10px] bg-mainAlt radius min-h-[200px] transition-all duration-500 flex-wrap
    
    `}>
        { networkLists.map(network => (
            <div 
              onClick={() => setShowChains({ visible: false, name: network.name, chainId: network.chainId, logo: network.logo })}
              key={network.id} className="flex-row-center py-[3px] px-[5px] gap-[10px] hover:bg-secondaryAlt p-[5px] radius cursor-pointer">
                <Image src={network.logo} alt="chain-logo" className="w-[25px] h-[25px] rounded-[50%] object-cover" />
                <h4 className='font-bold text-[12px] md:text-[14px] lg:text-[16px] text-textWhite'> {network.name} </h4>
            </div>
        )) }
    </section>
  )
}

export default NetworkLists