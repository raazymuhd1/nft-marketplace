"use client"
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from "@/components"
import ItemHeader from './ItemHeader'
import { items } from '@/utils/constants'

const Tracking = () => {
    const [tabs, setTabs] = useState([
        { id: 0, title: "Top", icon: "", isActive: true },
        { id: 1, title: "Trending", icon: "", isActive: false },
    ])

  return (
    <section className="mt-[30px]">
        <SectionTitle text="Real time data tracking" styles='capitalize' />
        {/* tabs */}
        <aside className="flex-row-center mt-[25px] gap-[15px]">
            { tabs.map(tab => (
                <div className="p-[10px] radius w-[fit-content] bg-secondary cursor-pointer">
                    <h4 className="text-center font-semibold lg:text-[16px] text-[14px]"> {tab.title} </h4>
                </div>
            )) }
        </aside>

        {/* items header */}
        <ItemHeader />
        <div className="flex-col-notcenter gap-[20px]">
            { items.slice(0, 5).map(item => (
                <Link href={item.url} className="w-[35%] hover:bg-secondary flex-row-center p-[10px]">
                    <aside className="flex-row-center w-[50%] gap-[10px]">
                        <h4 className="font-semibold"> {item.id} </h4>
                        <Image src={item.img} alt="item-img rounded-[10px]" className="small-img" />  
                        <h2 className="font-bold text-[16px] whitespace-nowrap"> {item.title} </h2>   
                    </aside>
                    <aside className="flex-row-center w-[50%] gap-[10px]">
                        <div className="flex-row-center gap-[10px]">
                            {/* eth icon */}
                            <h4 className="price-volume"> {item.floorPrice} </h4>
                        </div>
                        <div className="flex-row-center gap-[10px]">
                            {/* eth icon */}
                            <h4 className="price-volume"> {item.volume} </h4>
                        </div>
                    </aside>
                </Link>
            )) }
        </div>
    </section>
  )
}

export default Tracking