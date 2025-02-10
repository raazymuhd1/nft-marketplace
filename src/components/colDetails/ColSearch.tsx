"use client"
import {useState} from 'react'
import { MdArrowBackIosNew, MdSearch, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdLocalOffer } from "react-icons/md";
import { priceFilters } from "@/utils/constants"

const ColSearch = () => {
    const [showFilters, updateFilters] = useState<boolean>(false)
    const [selectedFilter, updateSelectedFilter] = useState<string>("")

  return (
    <section className="w-full sticky top-0 h-[40px] flex-row-center gap-[10px] mt-[10px]">
        <div className="p-[5px] radius border-[1px] cursor-pointer">
            <MdArrowBackIosNew size={24} />
        </div>
        {/* search input */}
        <div className="flex-row-center h-full w-[80%] radius border-[1px] p-[5px]">
            <MdSearch size={24} className='' />
            <input type="text" placeholder='Search...' className="bg-transparent border-none outline-none p-[10px] w-[60%] h-full" />
        </div>

        {/* filtering */}
        <div className="w-[10%] relative top-0 h-full">
            {/* filter trigger */}
            <div 
                onClick={() => updateFilters(!showFilters)}
                className="flex-row-center border-[1px] radius gap-[10px] h-full w-full p-[5px] justify-center cursor-pointer">
                <h4> Recently Listed </h4>
                { showFilters ? <MdOutlineKeyboardArrowUp size={24} /> :  <MdOutlineKeyboardArrowDown size={24} /> }
            </div>

            {/* filter lists */}
             <div className={`${showFilters ? "flex opacity-1 flex-col gap-[10px]" : "hidden opacity-0"} bg-main radius absolute top-[40px] w-full`}>
                { priceFilters?.map(filter => (
                    <div
                        onClick={() => updateFilters(false)} 
                        key={filter.id} className='w-full p-[5px] border-b-[1px] hover:bg-secondaryAlt text-textWhite cursor-pointer'> 
                        <h4 className="font-bold text-[14px] text-center"> {filter.title} </h4>
                    </div>
                )) }
             </div>

        </div>

        {/* offers */}
        <div className="w-[10%] h-full flex-row-center gap-[10px] radius border-[1px] p-[5px] justify-center cursor-pointer">
            <MdLocalOffer size={20} />
            <h4 className="font-bold text-[14px]"> Collection Offer </h4>
        </div>
    </section>
  )
}

export default ColSearch