import React from 'react'
import { MdSearch } from "react-icons/md";

const SearchInput = () => {
  return (
    <div className="flex items-center w-[50%] gap-[10px] border-[1px] rounded-[10px] p-[10px] h-[10px]">
        <MdSearch size={20} />
        <input type="text" placeholder='Searching..' className="bg-transparent border-none outline-none p-[10px] w-[80%]" />
        {/* another icon */}
    </div>
  )
}

export default SearchInput