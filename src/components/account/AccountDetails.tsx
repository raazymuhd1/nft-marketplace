import React from 'react'
import { CustomButton } from "@/components"

const AccountDetails = () => {
  return (
    <div className="flex h-[40%] flex-col w-full gap-[20px] mt-[20px]">
        <div className="flex flex-col gap-[10px]">
            <h3 className="text-[1vmax] font-bold"> Username </h3>
            <input type="text" name="" id="" placeholder='username' className="p-[10px] border-[1px] border-secondaryAlt outline-none radius" />
            <p className="text-[.6vmax] font-bold text-secondaryAlt"> 4-60 characters, support numbers, symbol, and underline. </p>
        </div>

         <div className="flex flex-col gap-[10px]">
            <h3 className="text-[1vmax] font-bold"> Description </h3>
            <textarea rows={10} placeholder='description' className="p-[10px] border-[1px] border-secondaryAlt outline-none radius" />
            <p className="text-[.6vmax] font-bold text-secondaryAlt"> Markdown syntax is supported. </p>
        </div>

        <div className="w-full flex flex-col gap-[10px]">
            <h3 className="text-[1vmax] font-bold"> Email </h3>
            <aside className="w-full flex-row-center gap-[10px]">
                <input type="text" name="" id="" placeholder='username' className="p-[10px] border-[1px] outline-none border-secondaryAlt radius w-[90%]" />
                <CustomButton styles='w-[10%] bg-textBlue text-textWhite text-[.6vmax]' >
                    Verify
                </CustomButton>
            </aside>
            <p className="text-[.6vmax] font-bold text-secondaryAlt"> your email address. </p>
        </div>
    </div>
  )
}

export default AccountDetails