import React from 'react'
import { SectionTitle } from "@/components"
import { signalItems } from "@/utils/constants"
import ItemCard from './ItemCard'
import { MdArrowBackIos, MdArrowForwardIos  } from "react-icons/md";

const Signal = () => {
  return (
    <section className="mt-[50px] min-w-[200vw]">
       <SectionTitle text='Market Signal' styles='mb-[20px]' />

       <aside className="w-full overflow-x-scroll overflow-y-hidden flex-row-center gap-[20px] px-[10px] py-[20px]">
         {/* left arrow */}
         <aside className='bg-secondary w-[50px] h-[50px] rounded-[50%] flex justify-center'>
          <MdArrowBackIos size={24} className="h-full" />
         </aside>
         {  signalItems.map(item => (
           <ItemCard { ...item } />
         )) }
         {/* right arrow */}
         <aside className='bg-secondary w-[50px] h-[50px] rounded-[50%] flex justify-center'>
          <MdArrowForwardIos size={24} className="h-full" />
         </aside>
       </aside>
    </section>
  )
}

export default Signal