import { StaticImageData } from 'next/image';
import React from 'react'
import Image  from 'next/image';
import Link from "next/link"

interface IProps {
    id: number;
    title: string;
    url: string;
    img: StaticImageData;
    floorPrice: string;
    volume: string;
    volumeUp: string;
}

const ItemCard = ({id, title, url, img, floorPrice, volume, volumeUp }: IProps) => {
  return (
    <Link
        href={url}
        key={id} 
        className={`w-[250px] h-[fit-content] flex flex-col gap-[15px] items-center p-[15px] radius signal_card_shadow overflow-hidden hover:mt-[-4px] transition-all duration-500 `}>
        <div className='py-[4px] px-[6px] bg-secondary'>
            <h4 className="text-textBlue font-semibold text-[12px]"> Top Volume Up {volumeUp} </h4>
        </div>

        <div className="flex flex-col items-center gap-[10px]">
            <Image src={img} alt="item-img" className="w-[80px] h-[80px] radius " />
            <h3 className='font-bold lg:text-[16px] text-[14px] '> {title} </h3>
        </div>

        <aside className="flex-row-center w-[60%] mx-auto justify-between ">
            <div className="flex-col-notcenter">
                <h4 className='text-secondary font-semibold text-[14px]'>Floor Price</h4>
                <h3 className='font-bold'> {floorPrice} </h3>
            </div>
            <div className="flex-col-notcenter">
                <h4 className='text-secondary font-semibold text-[14px]'> Volume </h4>
                <h3 className='font-bold'> {volume} </h3>
            </div>
        </aside>

    </Link>
  )
}

export default ItemCard