import React from 'react'
import { MdSearch } from "react-icons/md";
import { BsSlash } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div className="flex items-center w-[50%] gap-[10px] border-[1px] rounded-[5px] p-[15px] h-[40px]">
        <MdSearch size={20} />
        <input type="text" placeholder='Searching..' className="bg-transparent border-none outline-none p-[10px] w-[80%]" />
        {/* another icon */}
        <BsSlash size={20} className="cursor-pointer p-[8px] rounded-[6px] bg-slate-400 w-[10%]"/>
    </div>
  )
}

export default SearchInput