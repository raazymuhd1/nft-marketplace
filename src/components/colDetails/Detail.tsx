"use client"
import {useState, ReactNode} from 'react'
import Image from "next/image"
import { azuki } from '@/assets'
import { colSocials, colExtraIcons, colTabs, colInfo } from "@/utils/constants"
import ColSearch from './ColSearch';
import ColDetailSidebar from './ColDetailSidebar';
import ColItems from "./ColItems";
import ColItemDetails from './ColItemDetails';
import ColItemMoreDetail from './ColItemMoreDetail';

const Detail = () => {
        const [tabs, updateTabs] = useState(colTabs)
        const [colDetail, updateColDetail] = useState(colInfo);
        const [showMore, updateShowMore] = useState<boolean>(false)


  return (
    <section className="w-full h-full p-[20px]">
        {/* top */}
        <aside className='w-full h-[fit-content] flex justify-between items-start mt-[20px]'>
            {/* left side (needs to refactor later on) */}
            <aside className="flex gap-[15px] w-[50%]">
                <Image src={azuki} alt="item-img" className="w-[100px] h-[100px] object-cover radius" />
                <div className="flex flex-col gap-[5px] w-[60%]">
                    { colDetail.map(({id, name, details, moreDetail, description}, idx) => (
                     <div 
                        key={id || idx}
                        className="flex flex-col gap-[5px]">
                            <h2 className='font-bold lg:text-[25px]'> {name} </h2>
                            { details.map(detail => (
                                    <ColItemDetails { ...detail } />
                            )) }

                                <p className="text-[12px] text-secondaryAlt">
                                   { showMore ? description : `${description.slice(0, 90)}...` }
                                   <strong 
                                    onClick={() => updateShowMore(!showMore)}
                                    className={`text-textBlue cursor-pointer`}> { showMore ? "less" : "more" } </strong> 
                                </p>

                            {/* prices */}
                            { moreDetail.map(detail => (
                                    <ColItemMoreDetail { ...detail } />
                            )) }
                     </div>
                    )) }

                </div>
            </aside>

            {/* collection socials */}
            <aside className="w-[50%] flex-row-center gap-[15px] justify-end">
                {colSocials.map(social => (
                    <a key={social.id} href={social.url} target='_blank' >
                        <social.Logo size={20} />
                    </a>
                ))}
                <div className="h-[15px] w-[2px] bg-secondaryAlt" />
                { colExtraIcons.map(item => (
                    <item.Logo key={item.id} size={20} className='cursor-pointer' />
                )) }
            </aside>
        </aside>

        {/* tabs */}
        <aside className="w-full mt-[30px]">
            <aside className="flex items-start gap-[25px]">
                { tabs.map(tab => (
                    <div 
                        key={tab.id}
                        className='flex flex-col w-[fit-content] p-[5px] gap-[5px] cursor-pointer'>
                        <h3 className="font-bold text-[14px] md:text-[16px] lg:text-[18px]"> {tab.title} </h3>
                        <div className={`${tab.isActive ? "block" : "hidden"} h-[2px] w-full bg-textBlue`} />
                    </div>
                )) }
            </aside>
        </aside>

        {/* filters */}
        <ColSearch />

        <aside className="flex h-[70%] w-full">  
            <ColDetailSidebar />
            {/* collections */}
            <ColItems />
        </aside>
    </section>
  )
}

export default Detail