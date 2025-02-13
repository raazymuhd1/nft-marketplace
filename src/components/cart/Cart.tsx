import React, { Dispatch, SetStateAction } from 'react'
import { MdOutlineClose } from "react-icons/md";

interface ICart {
   showCart: boolean;
   setShowCart: Dispatch<SetStateAction<boolean>>
}

const Cart = ({showCart, setShowCart}: ICart) => {
  return (
    <section 
      className={`h-screen ${showCart ? "fixed translate-x-[0px] inset-0 opacity-1" : "hidden translate-x-[1950px] opacity-0"} transition-[opacity] duration-[1s] w-full`}>

       <div 
          onClick={() => setShowCart(false)}
          className={`${showCart ? "relative h-full w-full translate-x-[0px] inset-0 opacity-1" : "hidden translate-x-[1950px] opacity-0"} glass_bg`} />

       <aside className={`h-[90%] w-[20%] bg-secondary p-[15px] absolute bottom-0 right-0 transition-all duration-500 radius`}>
        <div className="flex-row-center justify-between w-full border-b-[1px] border-secondaryAlt p-[20px]">
            <div className="flex-row-center gap-[10px]">
                <h3 className="font-bold text-main text-[12px] md:text-[14px] lg:text-[16px] "> My Cart{"(3)"} </h3>
                <h4 className="text-textBlue font-bold text-[10px] md:text-[12px] lg:text-[14px] cursor-pointer"> Clear </h4>
            </div>
            <MdOutlineClose 
              onClick={() => setShowCart(false)}
              size={20} className="text-main cursor-pointer" />
        </div>
       </aside>
    </section>
  )
}

export default Cart