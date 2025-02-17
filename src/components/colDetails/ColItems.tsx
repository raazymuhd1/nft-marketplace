import React from "react"
import Image from "next/image"
import Link from "next/link"
import { dummyCollections } from "@/utils/constants"
import { opensea, blur, eth, weth } from "@/assets"
import { BsPlus } from "react-icons/bs";

const ColItems = () => {

    return (
        <div className="w-[80%] p-[20px] ">

            <div className="w-full mt-[40px]  flex gap-[10px] flex-wrap">
                { dummyCollections.map(col => (
                    <div key={col.id} className="h-[35%] w-[15%] radius overflow-hidden hover:border-textBlue border-[1px] transition-[border] duration-500">

                        <div className="h-[60%] w-full overflow-hidden">
                            <Image src={col.img} alt="item-img" className="w-full h-full hover:scale-[1.1] object-cover relative top-0 transition-[transform] duration-500" />

                            <div className="flex-row-center w-full justify-between absolute top-0">
                                <Image src={col.market} alt="market-logo" className="w-[20px] h-[20px] object-cover rounded-[50%]" />
                                <BsPlus size={16} className="bg-secondaryAlt p-[3px] rounded-[50%]" />
                            </div>
                        </div>

                        <div className="flex w-full flex-col gap-[10px] p-[10px]">
                            <h3 className="font-semibold text-[.8vmax]"> { col.tokenId } </h3>
                            {/* price & details */}
                            <div className="w-full flex-row-center justify-between">
                                <div className="flex-row-center">
                                    <Image src={eth} alt="" className="w-[20px] h-[20px] object-cover" />
                                    <h4 className="font-semibold text-[.8vmax]"> {col.price} </h4>
                                </div>
                                <Link href={`/item-detail/${col.id}`} className="w-[fit-content] border-[1px] uppercase  border-secondaryAlt text-textBlue text-[.7vmax] font-bold py-[2px] cursor-pointer px-[8px]">    
                                    details
                                </Link>
                            </div>
                            {/* last price */}
                            <h4 className="flex-row-center font-semibold text-[.6vmax] text-secondaryAlt">
                                Last
                                <Image src={weth} alt="weth" className="w-[20px] h-[20px] object-cover" />
                                { col.lastPrice }
                            </h4>
                                
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default ColItems