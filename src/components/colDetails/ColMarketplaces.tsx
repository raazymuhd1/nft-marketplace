"use client"
import { useState } from "react"
import Image from "next/image"
import { marketplaces } from "@/utils/constants"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ColSidebarTitle from "./ColSidebarTitle"

const ColMarketplaces = () => {
     const [showMarket, updateShowMarket] = useState<boolean>(false);

    return (
        <aside className="w-full flex flex-col gap-[10px]">
             <div 
              onClick={() => updateShowMarket(!showMarket)}
              className="flex-row-center w-full justify-between cursor-pointer"> 
                <ColSidebarTitle title="Marketplaces" styles="text-[.8vmax]" />
                { showMarket ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
            </div>

            <div className={` ${showMarket ? "flex opacity-1" : "hidden opacity-0"} w-full flex-col gap-[15px]`}>
                { marketplaces.map(({ id, title, img, rate }) => (
                    <div key={id} className="w-full flex-row-center justify-between cursor-pointer">
                        <aside className="flex-row-center gap-[10px]">
                            <Image src={img} alt="market-img" className="w-[20px] h-[20px] rounded-[50%] object-cover" />
                            <h3 className="font-semibold text-[.7xmax]"> {title} </h3>
                        </aside>

                        <p className="font-medium text-[.6vmax]"> {rate} </p>
                    </div>
                )) }
            </div>
        </aside>
    )
}

export default ColMarketplaces;
