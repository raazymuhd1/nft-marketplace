"use client"
import React from 'react'
import AccountImages from './AccountImages'
import AccountDetails from './AccountDetails'

const EditAccount = () => {
  return (
    <div className="w-full h-screen">
        <div className='border-b-[1px] h-[100px] sticky top-0 p-[20px] w-full'>
            <h2 className="font-bold text-[20px] md:text-[30px] lg:text-[35px] text-center w-full"> Edit Personal Information </h2>
        </div>

        <div className="w-[80%] md:text-[60%] lg:w-[40%] mx-auto">
            <AccountImages />
            <AccountDetails />
        </div>
    </div>
  )
}

export default EditAccount