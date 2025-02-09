"use client"
import {useState} from 'react'
import Link from "next/link"
import Image from 'next/image';
import { BsMoon, BsSun  } from "react-icons/bs";
import { blockchain } from '@/assets';
import { navlists } from "@/utils/constants"
import { SearchInput, Networks, ConnectWallet } from "@/components"

const Navbar = () => {
      const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <nav className={`flex items-center justify-between w-[95%] mx-auto h-full`}>
        <aside className='flex w-[50%] items-center gap-[20px]'>
            <div className="flex items-center ">
                <Image src={blockchain} alt="logo" className="w-[40px] h-[40px]" />
                <Link href="/" className="font-extrabold lg:text-[30px] md:text-[22px] text-[20px]"> MiddleM </Link>
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

            {/* networks */}
            <Networks />
            {/* gas settings */}
            {/* color mode */}
            <BsMoon size={20} className={`cursor-pointer ${isDarkMode ? "inline" : "hidden"}`} />
            <BsSun size={20} className={`cursor-pointer ${!isDarkMode ? "inline" : "hidden"}`} />
            {/* cart */}
            {/* connect wallet */}
            <ConnectWallet />
        </ul>
    </nav>
  )
}

export default Navbar