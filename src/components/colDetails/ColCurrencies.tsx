"use client"
import { useState } from "react"
import Image from "next/image"
import {currencies} from "@/utils/constants"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ColSidebarTitle from "./ColSidebarTitle"

const ColCurrencies = () => {
     const [showCurrency, updateShowCurrency] = useState<boolean>(false);

    return (
        <aside className="w-full flex flex-col gap-[10px]">
             <div 
              onClick={() => updateShowCurrency(!showCurrency)}
              className="flex-row-center w-full justify-between cursor-pointer"> 
                <ColSidebarTitle title="Currency" styles="text-[.8vmax]" />
                { showCurrency ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
            </div>

            <div className={`${showCurrency ? "flex opacity-1" : "hidden opacity-0"} w-full flex-col gap-[15px]`}>
                { currencies.map(({id, title, logo}) => (
                    <div key={id} className="w-full flex-row-center gap-[10px] cursor-pointer">
                        <Image src={logo} alt="currency" className="w-[20px] h-[20px] rounded-[50%] object-cover" />
                        <h3 className="font-semibold text-[.7vmax]"> {title} </h3>
                    </div>
                )) }
            </div>
        </aside>
    )
}

export default ColCurrencies;
