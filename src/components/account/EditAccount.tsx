"use client"
import React from 'react'
import AccountImages from './AccountImages'
import AccountDetails from './AccountDetails'
import AccountLinks from './AccountLinks'

const EditAccount = () => {
  return (
    <div className="w-full">
        <div className='border-b-[1px] border-secondaryAlt h-[100px] sticky top-0 p-[20px] w-full'>
            <h2 className="font-bold text-[20px] md:text-[30px] lg:text-[35px] text-center w-full"> Edit Personal Information </h2>
        </div>

        <div className="w-[80%] flex flex-col gap-[20px] p-[30px] h-full md:text-[60%] lg:w-[40%] mx-auto">
            <AccountImages />
            <AccountDetails />
            <AccountLinks />
        </div>
    </div>
  )
}

export default EditAccount