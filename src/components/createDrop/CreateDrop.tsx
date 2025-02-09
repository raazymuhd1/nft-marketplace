"use client"
import { useState } from "react"
import ColInput from "./ColInput"
import ColLogo from "./ColLogo"
import ColChains from "./ColChains"

const CreateDrop = () => {
        const [infoLists, setInfoLists] = useState([
            "Manage Collection Settings: Edit collection details, earnings, and links.",
            "Set Up Your Drop: Configure your mint schedule and presale stages.",
            "Prepare Designs: Customize your pages and upload all assets."
        ])
    

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

           {/* informations */}
           <div className="flex flex-col gap-[10px] w-full p-[15px] bg-secondary items-start h-[fit-content] mt-[20px]">
             <h3 className="font-bold"> 🔔 After you deploy your contract you’ll be able to </h3>
             <ul className="flex flex-col gap-[5px] ml-[25px]">
                 { infoLists.map((list, idx) => (
                     <li 
                        key={idx} 
                        className="list-disc text-secondaryAlt common_text_size_reg"> {list} </li>
                 )) }
             </ul>
           </div>
        </div>
    </section>
  )
}

export default CreateDrop