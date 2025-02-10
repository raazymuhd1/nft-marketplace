import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import { IProfile } from '@/types';
import { useMarketContext } from '../ContextApi';

const UserProfile = () => {
      // @ts-ignore
      const { showProfile, setShowProfile } = useMarketContext()

      console.log(showProfile)

  return (
    <section 
      className={`h-screen ${showProfile ? "fixed translate-x-[0px] inset-0 opacity-1" : "hidden translate-x-[1950px] opacity-0"} transition-[opacity] duration-[1s] w-full bg-[red]`}>

       <div 
          onMouseEnter={() => setShowProfile(false)}
          className={`${showProfile ? "relative h-full w-full translate-x-[0px] inset-0 opacity-1" : "hidden translate-x-[1950px] opacity-0"} bg-secondary`} />

       <aside className={`h-[90%] w-[20%] bg-mainAlt p-[15px] absolute bottom-0 right-0 transition-all duration-500`}>
        <div className="flex-row-center justify-between w-full">
            <div className="flex-row-center gap-[10px]">
                <h3 className="font-bold text-textWhite text-[12px] md:text-[14px] lg:text-[16px] "> My Cart{"(3)"} </h3>
                <h4 className="text-textBlue font-bold text-[10px] md:text-[12px] lg:text-[14px] cursor-pointer"> Clear </h4>
            </div>
            <MdOutlineClose 
              onClick={() => setShowProfile(false)}
              size={20} className="text-textWhite cursor-pointer" />
        </div>
       </aside>
    </section>
  )
}

export default UserProfile