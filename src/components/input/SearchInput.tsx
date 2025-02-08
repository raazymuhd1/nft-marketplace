import React from 'react'
import { MdSearch } from "react-icons/md";
import { BsSlash } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div className="flex items-center w-[50%] gap-[10px] border-[1px] rounded-[5px] p-[15px] h-[40px]">
        <MdSearch size={20} />
        <input type="text" placeholder='Searching..' className="bg-transparent border-none outline-none p-[10px] w-[80%]" />
        {/* another icon */}
        <BsSlash color='#363c42' size={24} className="cursor-pointer rounded-[6px] w-[10%] bg-secondary"/>
    </div>
  )
}

export default SearchInput