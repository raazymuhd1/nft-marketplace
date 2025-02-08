import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className={`h-[80px] sticky top-0 bg-textWhite z-[9] w-full border-b-[1px]`}>
        <Navbar />
    </header>
  )
}

export default Header