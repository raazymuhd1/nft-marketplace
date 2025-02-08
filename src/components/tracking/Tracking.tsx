"use client"
import {useState} from 'react'
import { SectionTitle } from "@/components"
import Top from './Top'

const Tracking = () => {
    const [tabs, setTabs] = useState([
        { id: 0, title: "Top", icon: "", isActive: true },
        { id: 1, title: "Trending", icon: "", isActive: false },
    ])

  return (
    <section className="mt-[30px] container-center">
        <SectionTitle text="Real time data tracking" styles='' />
        {/* tabs */}
        <aside className="flex-row-center mt-[25px] gap-[15px]">
            { tabs.map(tab => (
                <div key={tab.id} className="p-[10px] radius w-[fit-content] bg-secondary cursor-pointer">
                    <h4 className="text-center font-semibold lg:text-[16px] text-[14px]"> {tab.title} </h4>
                </div>
            )) }
        </aside>

        <Top />
    </section>
  )
}

export default Tracking