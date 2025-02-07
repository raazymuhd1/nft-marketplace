import {useState} from 'react'
import Link from "next/link"
import { navlists } from "@/utils/constants"
import { SearchInput } from "@/components"

const Navbar = () => {

  return (
    <nav className={`flex items-center justify-between w-[90%] mx-auto h-full`}>
        <aside className='flex w-[50%] items-center gap-[20px]'>
            <div>
                {/* logo */}
                <h2 className="font-extrabold lg:text-[30px] md:text-[22px] text-[20px]"> Element </h2>
            </div>

            <SearchInput />
        </aside>

        <ul className={`flex items-center gap-[30px]`}>
            { navlists.map(list => (
                <Link 
                    className={`text-[12px] md:text-[14px] lg:text-[16px] font-semibold`}
                    href={list.url} 
                    key={list.id}>
                    { list.title }
                </Link>
            )) }
        </ul>
    </nav>
  )
}

export default Navbar