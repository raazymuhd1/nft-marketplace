import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ItemHeader from './ItemHeader'
import TopItems from './TopItems'
import { trackingItems } from '@/utils/constants'

const Top = () => {
  return (
    <div className="flex w-full justify-between gap-[25px]">
            <div className="w-[30%]">
                <ItemHeader />
                <div className="flex-col-notcenter gap-[5px] w-full">
                    { trackingItems.slice(0, 5).map(item => (
                        <TopItems 
                            key={item.id}
                            { ...{ id: item.id, url: item.url, title: item.title, img: item.img, floorPrice: item.floorPrice, volume: item.volume } } 
                        />
                    )) }
                </div>
            </div>
            <div className="w-[30%]">
                <ItemHeader />
                <div className="flex flex-col items-center gap-[5px] w-full">
                    { trackingItems.slice(5, 10).map(item => (
                    <TopItems 
                        key={item.id}
                        { ...{ id: item.id, url: item.url, title: item.title, img: item.img, floorPrice: item.floorPrice, volume: item.volume } } />
                    )) }
                </div>
            </div>
            <div className="w-[30%]">
                <ItemHeader />
                <div className="flex-col-notcenter gap-[5px] w-full">
                    { trackingItems.slice(10, 15).map(item => (
                    <TopItems 
                        { ...{ id: item.id, url: item.url, title: item.title, img: item.img, floorPrice: item.floorPrice, volume: item.volume } } />
                    )) }
                </div>
            </div>
        </div>
  )
}

export default Top