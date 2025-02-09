import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface IProps {
    id: number;
    img:  StaticImageData ;
    title: string;
    url: string;
    floorPrice: string;
    volume: string;
}

const TopItems = ({id, url, img, title, floorPrice, volume}: IProps) => {
  return (
            <Link 
                key={id}
                href={url} className="w-full hover:bg-secondaryAlt flex-row-center justify-between p-[10px]">
                <aside className="flex-row-center w-[50%] gap-[10px]">
                    <h4 className="font-semibold"> {id} </h4>
                            <Image src={img} alt="item-img rounded-[10px]" className="small-img" />  
                    <h2 className="font-bold text-[16px] whitespace-nowrap"> {title} </h2>   
                </aside>
                <aside className="flex-row-center w-[50%] gap-[50px] justify-end">
                    <div className="flex-row-center gap-[10px]">
                                {/* eth icon */}
                        <h4 className="price-volume font-bold"> {floorPrice} </h4>
                    </div>
                    <div className="flex-row-center gap-[10px]">
                                {/* eth icon */}
                        <h4 className="price-volume font-bold "> {volume} </h4>
                    </div>
                </aside>
        </Link>
  )
}

export default TopItems