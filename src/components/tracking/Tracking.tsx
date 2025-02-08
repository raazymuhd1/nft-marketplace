"use client"
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from "@/components"
import ItemHeader from './ItemHeader'
import TopItems from './TopItems'
import { items } from '@/utils/constants'

const Tracking = () => {
    const [tabs, setTabs] = useState([
        { id: 0, title: "Top", icon: "", isActive: true },
        { id: 1, title: "Trending", icon: "", isActive: false },
    ])

  return (
    <section className="mt-[30px] w-full">
        <SectionTitle text="Real time data tracking" styles='capitalize' />
        {/* tabs */}
        <aside className="flex-row-center mt-[25px] gap-[15px]">
            { tabs.map(tab => (
                <div key={tab.id} className="p-[10px] radius w-[fit-content] bg-secondary cursor-pointer">
                    <h4 className="text-center font-semibold lg:text-[16px] text-[14px]"> {tab.title} </h4>
                </div>
            )) }
        </aside>

        <div className="flex w-full justify-between gap-[25px]">
            <div className="w-[30%]">
                <ItemHeader />
                <div className="flex-col-notcenter gap-[5px] w-full">
                    { items.slice(0, 5).map(item => (
                    <TopItems 
                        { ...{ id: item.id, url: item.url, title: item.title, img: item.img, floorPrice: item.floorPrice, volume: item.volume } } />
                    )) }
                </div>
            </div>
            <div className="w-[30%]">
                <ItemHeader />
                <div className="flex-col-notcenter gap-[5px] w-full">
                    { items.slice(5, 10).map(item => (
                    <TopItems 
                        { ...{ id: item.id, url: item.url, title: item.title, img: item.img, floorPrice: item.floorPrice, volume: item.volume } } />
                    )) }
                </div>
            </div>
            <div className="w-[30%]">
                <ItemHeader />
                <div className="flex-col-notcenter gap-[5px] w-full">
                    { items.slice(10, 15).map(item => (
                    <TopItems 
                        { ...{ id: item.id, url: item.url, title: item.title, img: item.img, floorPrice: item.floorPrice, volume: item.volume } } />
                    )) }
                </div>
            </div>
        </div>
        {/* items header */}

    </section>
  )
}

export default Tracking