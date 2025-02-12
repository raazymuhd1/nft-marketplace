"use client"
import {useState, useEffect} from 'react'
import Image from "next/image"
import { azuki } from '@/assets'
import { MdContentCopy } from "react-icons/md";
import { colSocials, colExtraIcons, colTabs } from "@/utils/constants"
import ColSearch from './ColSearch';
import ColDetailSidebar from './ColDetailSidebar';

const dummyAddr = '0x2675616c14eb3f56db556c1ff95aaf2a19c88bcb'

const Detail = () => {
        const [tabs, updateTabs] = useState(colTabs)

        // useEffect(() => {
        //     updateTabs(tabs.map(tab => tab.id === 0 ? { ...tab, isActive: true } : tab ))
        // }, [tabs])

  return (
    <section className="w-full p-[20px]">
        {/* top */}
        <aside className='w-full flex justify-between items-start mt-[20px]'>
            {/* left side (needs to refactor later on) */}
            <aside className="flex gap-[15px] w-[50%]">
                <Image src={azuki} alt="item-img" className="w-[100px] h-[100px] object-cover radius" />
                <div className="flex flex-col gap-[5px] w-[60%]">
                    <div className="flex flex-col gap-[5px]">
                        <h2 className='font-bold lg:text-[25px]'> Azuki </h2>
                        <div className="flex-row-center gap-[5px]">
                            <div className="flex-row-center gap-[10px]">
                                {/* eth icon */}
                                <p className="text-[12px] font-bold text-secondaryAlt"> {dummyAddr.slice(0, 5)}...{dummyAddr.slice(dummyAddr.length-6, dummyAddr.length-1)} </p>
                                <MdContentCopy size={14} />
                                {/* copy icon */}
                            </div>
                            <div className="h-[15px] w-[2px] bg-secondaryAlt" />
                            <p className="text-[12px]"> Items <strong className="text-[12px] font-bold text-secondaryAlt"> 20,000 </strong> </p>
                            <p className="text-[12px]"> Created <strong className="text-[12px] font-bold text-secondaryAlt"> . Apr 2023 </strong> </p>
                            <p className="text-[12px]"> Royalty <strong className="text-[12px] font-bold text-secondaryAlt"> . 2.5% </strong> </p>
                        </div>

                    </div>

                    <p className="text-[12px] text-secondaryAlt">
                        A brand for the metaverse. Built by the community. Azuki starts with a
                        collection of 10,000 avatars that give you membership access to The
                        Garden: a corner of the internet where artists, builders, and web3
                        enthusiasts meet to create a decentralized future. Azuki holders receive
                        access to exclusive drops, experiences, and more. Visit azuki.com for
                        more details. We rise together. We build together. We grow together.
                        Ready to take the red bean?A brand for the metaverse. Built by the community. Azuki starts with a
                        collection of 10,000 avatars that give you membership access to The
                        Garden: a corner of the internet where artists, builders, and web3
                        enthusiasts meet to create a decentralized future. Azuki holders receive
                        access to exclusive drops, experiences, and more. Visit azuki.com for
                        more details. We rise together. We build together. We grow together.
                        Ready to take the red bean? 
                    </p>

                    {/* prices */}
                    <aside className="flex-row-center gap-[25px]">
                        <div className="flex flex-col gap-[2px]">
                            <div className="flex-row-center gap-[2px]">
                                {/* eth icon */}
                                <h3 className="text-[14px] md:text-[16px] font-bold"> 3.146 </h3>
                            </div>
                            <p className="text-[12px] text-secondaryAlt"> floor price </p>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <div className="flex-row-center gap-[2px]">
                                {/* eth icon */}
                                <h3 className="text-[14px] md:text-[16px] font-bold"> 374 </h3>
                            </div>
                            <p className="text-[12px] text-secondaryAlt"> 24h volume </p>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <div className="flex-row-center gap-[2px]">
                                {/* eth icon */}
                                <h3 className="text-[14px] md:text-[16px] font-bold"> 1.04M </h3>
                            </div>
                            <p className="text-[12px] text-secondaryAlt"> total volume </p>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <h3 className="text-[14px] md:text-[16px] font-bold"> 4,095 </h3>
                            <p className="text-[12px] text-secondaryAlt"> owners </p>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <h3 className="text-[14px] md:text-[16px] font-bold"> 5.1% </h3>
                            <p className="text-[12px] text-secondaryAlt"> listed </p>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <h3 className="text-[14px] md:text-[16px] font-bold"> 133 </h3>
                            <p className="text-[12px] text-secondaryAlt"> 24 sales </p>
                        </div>
                    </aside>
                </div>
            </aside>

            <aside className="w-[50%] flex-row-center gap-[15px] justify-end">
                {colSocials.map(social => (
                    <a key={social.id} href={social.url} target='_blank' >
                        <social.Logo size={20} />
                    </a>
                ))}
                <div className="h-[15px] w-[2px] bg-secondaryAlt" />
                { colExtraIcons.map(item => (
                    <item.Logo key={item.id} size={20} />
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

        <aside className="flex w-full">  
            <ColDetailSidebar />
            {/* collections */}
        </aside>
    </section>
  )
}

export default Detail