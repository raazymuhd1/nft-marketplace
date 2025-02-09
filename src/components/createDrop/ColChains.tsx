import { useState } from "react"
import { ether } from "@/assets"
import Image from "next/image"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const ColChains = () => {
    const [showChains, setShowChains] = useState<boolean>(false)
    const [advancedSet, setAdvancedSet] = useState<boolean>(false)

  return (
      <div className="mt-[20px] w-full flex flex-col gap-[10px]">
                <h3 className="font-bold"> Network/Chain </h3> 
                <p className="common_bold text-secondaryAlt"> Select the blockchain network where you want to deploy your smart contract. </p>

                <div className="flex-row-center justify-between w-full p-[8px] radius border-[1px] bg-secondary cursor-pointer hover:border-textBlue">
                    {/* chains selection */}
                    <aside className="flex-row-center">
                        <Image src={ether} alt="chain-img" className="w-[25px] h-[25px] radius" />
                        <div className="flex flex-col">
                            <h4 className="font-bold text-[8px] md:text-[10px] lg:text-[12px]"> Ethereum </h4>
                            <p className="text-secondaryAlt common_text_size_reg"> Chain ID: 1 </p>
                        </div>
                    </aside>

                    <aside 
                        className="flex-row-center gap-[6px]">
                        <div className="">
                            <h4 className="font-bold text-[8px] md:text-[10px] lg:text-[12px] text-secondaryAlt"> Est. Gas Fee: 0.0008 ETH </h4>
                            <p className="common_text_size_reg text-secondaryAlt"> ~$3.26 </p>
                        </div>
                        <MdKeyboardArrowDown size={20} className="" />
                    </aside>
                </div>
                {/* advanced settings */}
                <div 
                    className="w-full flex flex-col gap-[10px]">
                    <div
                        onClick={() => setAdvancedSet(!advancedSet)} 
                        className="flex-row-center w-full gap-[5px] cursor-pointer">
                        <p className="common_bold text-secondaryAlt"> Advanced Settings </p>
                        { advancedSet ? <MdKeyboardArrowUp size={20} className=""/> :  <MdKeyboardArrowDown size={20} className=""/>}
                       
                    </div>

                    <div className={`${advancedSet ? "flex flex-col gap-[10px]" : "hidden"}`}>
                        <h3 className="font-bold"> Non-transferable (Soulbound Token) </h3>
                        <div className="flex-row-center gap-[10px] border-[1px] radius p-[10px]">
                            <input type="checkbox" name="" id="check" className="active:border-textBlue cursor-pointer" />
                            <p className="text-[10px] md:text-[12px] lg:text-[14px]"> Soulbound Token is a non-transferable token, meaning the minter will always remain the owner. </p>
                        </div>  
                    </div>
                </div>


            </div>
  )
}

export default ColChains