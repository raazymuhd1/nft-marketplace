"use client"
import {useState} from 'react'
import Image from "next/image"
import { sig, dragonRoark, dragonfly, sequoia, incde } from '@/assets'

const Backers = () => {
        const [backers, setBackers] = useState([sig, dragonRoark, dragonfly, sequoia, incde])

  return (
    <section
      className="bg-mainAlt h-[90px] p-[20px] w-full flex-row-center gap-[70px] justify-center border-b-[0.5px] border-b-secondary"
     >
        { backers.map(back => (
            <Image src={back} alt="backers-img" className=' object-cover' />
        )) }
     </section>
  )
}

export default Backers