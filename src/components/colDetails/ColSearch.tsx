"use client"
import {useState} from 'react'
import { MdArrowBackIosNew, MdSearch, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp  } from "react-icons/md";
import { priceFilters } from "@/utils/constants"

const ColSearch = () => {
    const [showFilters, updateFilters] = useState<boolean>(false)
    const [selectedFilter, updateSelectedFilter] = useState<string>("")

  return (
    <section className="w-full h-[80px] flex-row-center gap-[10px] p-[20px] ">
        <div className="p-[5px] radius border-[1px] cursor-pointer">
            <MdArrowBackIosNew size={24} />
        </div>
        {/* search input */}
        <div className="flex-row-center h-full w-[80%] radius border-[1px] p-[5px]">
            <MdSearch size={24} className='' />
            <input type="text" placeholder='Search...' className="bg-transparent border-none outline-none p-[10px] w-[60%] h-full" />
        </div>
        {/* filter trigger */}
        <div className="w-[10%] relative top-0">
            <div 
                onClick={() => updateFilters(!showFilters)}
                className="flex-row-center border-[1px] radius gap-[10px] h-full w-full p-[5px] justify-center cursor-pointer">
                <h4> Recently Listed </h4>
                <MdOutlineKeyboardArrowDown size={24} />
            </div>

            {/* filter lists */}
             <div className={`${showFilters ? "flex opacity-1 flex-col gap-[10px] opacity-0" : "hidden"} bg-main radius absolute top-[40px] w-full`}>
                { priceFilters?.map(filter => (
                    <div
                        onClick={() => updateFilters(false)} 
                        key={filter.id} className='w-full p-[5px] border-b-[1px] hover:bg-secondaryAlt text-textWhite'> 
                        <h4 className="font-bold text-[14px] text-center"> {filter.title} </h4>
                    </div>
                )) }
             </div>
        </div>
    </section>
  )
}

export default ColSearch