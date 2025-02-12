import React from 'react'
import { FaGlobe } from "react-icons/fa";

const AccountLinks = () => {
  return (
    <div className="flex flex-col gap-[10px]">
        <h3 className='text-[1vmax] font-bold'> Add Links </h3>
        <div className='min-h-[200px] border-[1px] border-secondaryAlt radius p-[20px]'>
            <aside className="flex-row-center gap-[10px] w-full border-[1px] border-secondaryAlt  p-[3px] radius">
                <FaGlobe size={16} className="h-[60%] border-[1px]  border-secondaryAlt radius w-[5%]" />
                <input type="text" name="" id="" placeholder='your website' className="p-[10px] border-l-[1px] border-secondaryAlt outline-none w-[90%] h-full placeholder:font-bold" />
            </aside>

        </div>
    </div>
  )
}

export default AccountLinks