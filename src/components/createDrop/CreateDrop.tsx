"use client"
import { useState } from "react"
import ColInput from "./ColInput"
import ColLogo from "./ColLogo"
import ColChains from "./ColChains"

const CreateDrop = () => {
    

  return (
    <section>
        <div className='border-b-[1px] flex items-center h-[80px] p-[20px]'>
            <h3 className="h-full w-[95%] mx-auto font-semibold lg:text-[22px]"> Create a Drop </h3>
        </div>

        <div className="w-[40%] mx-auto mt-[30px]">
            <div className='flex w-full items-center flex-col gap-[10px]'>
                <h2 className='font-bold lg:text-[25px] md:text-[20px] text-[18px]'> Let's create a smart contract for your drop. </h2>
                <p className="text-[12px] md:text-[14px] lg:text-[16px]"> Create an NFT drop, you must first deploy an ERC-721 contract on the blockchain. <strong className="font-semibold text-textBlue"> Learn more </strong> </p>
            </div>

            {/* collection logo */}
            <ColLogo />

            {/* collection input */}
           <ColInput />

           {/* collection chains */}
           <ColChains />


        </div>
    </section>
  )
}

export default CreateDrop