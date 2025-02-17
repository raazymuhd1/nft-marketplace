"use client"
import {useState} from 'react'
import Image from "next/image"
import ColSidebarTitle from "./ColSidebarTitle"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CustomButton } from "@/components"
import ColMarketplaces from "./ColMarketplaces"
import ColCurrencies from "./ColCurrencies"
import { ether } from '@/assets';

const ColDetailSidebar = () => {
    const [showPrice, updateShowPrice] = useState<boolean>(false)

  return (
    <section className="w-[18%] h-full border-r-[1px] border-secondaryAlt p-[10px] sticky top-0 left-0 flex flex-col gap-[20px]">

        {/* top filters */}
        <div className="w-full flex flex-col gap-[25px]">
          {/* prices */}
          <aside className="w-full flex flex-col gap-[10px]">
              <div 
                onClick={() => updateShowPrice(!showPrice)}
                className="flex-row-center w-full justify-between cursor-pointer"> 
                  <ColSidebarTitle title="Price" styles="text-[.8vmax]" />
                  { showPrice ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
              </div>

              <div className={`w-full ${showPrice ? "flex opacity-1" : "hidden opacity-0"} flex-col gap-[10px]`}>
                {/* select currency */}
                <div className='flex-row-center w-full justify-between border-[1px] border-secondaryAlt radius p-[5px] cursor-pointer'>
                    <aside className="flex-row-center">
                        <Image src={ether} alt="" className="w-[20px] h-[20px] rounded-[50%]" />
                        <h3 className="font-bold text-[.7vmax] uppercase"> Eth </h3>
                    </aside>
                    <MdKeyboardArrowDown size={20} />
                </div>
                {/* min/max price to filter */}
                <div className="flex-row-center w-full gap-[20px]">
                  <input type="text" placeholder='Min' className="w-[40%] border-[1px] border-secondaryAlt py-[5px] px-[10px] radius outline-none" />
                  <h4> To </h4>
                  <input type="text" placeholder='Max' className="w-[40%] border-[1px] border-secondaryAlt py-[5px] px-[10px] radius outline-none" />
                </div>

                <CustomButton styles="w-[50%] mx-auto font-bold text-[.8vmax] bg-mainAlt text-textWhite"> Apply </CustomButton>

              </div>
          </aside>

          {/* marketplaces */}
          <ColMarketplaces />
          {/* currencies */}
          <ColCurrencies />
        </div>

        {/* separator */}
        <div className="w-full h-[1px] bg-secondaryAlt" />

        {/* collection traits */}
        <div className="w-full flex flex-col gap-[25px]">
           <h3 className="font-bold text-[.9vmax]"> Traits </h3>
        </div>


    </section>
  )
}

export default ColDetailSidebar