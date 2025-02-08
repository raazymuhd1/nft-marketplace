import React from 'react'
import { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"

interface IProps {
    id: number;
    img:  StaticImageData ;
    title: string;
    url: string;
    floorPrice: string;
    volume: string;
}

const TrendingCard = ({id, img, title, url, floorPrice, volume }: IProps) => {
  return (
    <Link 
        className="radius w-[300px] h-[250px] card_shadow flex flex-col gap-[5px] "
        href={url}
    
     >
        <div className='flex flex-col w-full h-[70%] overflow-hidden'>
            <Image src={img} alt="trending-item" className="w-full h-[80%] object-cover radius hover:scale-[1.1] transition-all duration-500" />
            <h3 className="font-bold lg:text-[14px] text-[12px] p-[20px]"> {title} </h3>
        </div>

         <aside className="flex-row-center w-[80%] p-[20px] h-[30%] justify-between ">
            <div className="flex-col-notcenter">
                <h4 className='text-secondary font-semibold text-[12px]'>Floor Price</h4>
                <h3 className='font-bold'> {floorPrice} </h3>
            </div>
            <div className="flex-col-notcenter">
                <h4 className='text-secondary font-semibold text-[12px]'> Volume </h4>
                <h3 className='font-bold'> {volume} </h3>
            </div>
        </aside>
    </Link>
  )
}

export default TrendingCard