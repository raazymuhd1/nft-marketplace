import React from 'react'
import Image from "next/image"
import { eth } from '@/assets'

const Networks = () => {
  return (
    <div className={``}>
       <div className="flex items-center gap-[10px] cursor-pointer">
          <Image src={eth} alt="network" className="w-[25px] h-[25px] rounded-[50%]" />
          <h4 className="font-semibold"> Ethereum </h4>
       </div>
    </div>
  )
}

export default Networks