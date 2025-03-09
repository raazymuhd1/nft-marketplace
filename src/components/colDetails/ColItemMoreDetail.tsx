import {ReactNode} from 'react'
import Image from "next/image"
import { ether } from '@/assets'

type Iprops = {
    floorPrice: string;
    volume24: string;
    totalVolume: string;
    owners: string;
    listed: string;
    sales24: string;
}

const ColItemMoreDetail = ({floorPrice, volume24, totalVolume, owners, listed, sales24}: Iprops) => {

    const handleMoreDetail = (title: string, value: string): ReactNode => {
        return (
        <div className="flex flex-col items-center gap-[2px] w-full">
            <div className="flex-row-center gap-[2px]">
                <Image src={ether} alt="eth-icon" className="w-[15px] h-[15px] object-cover" />
                <h3 className="text-[14px] md:text-[16px] font-extrabold"> {value} </h3>
            </div>
            <p className="text-[12px] text-secondaryAlt"> {title} </p>
        </div>
        )
    }

  return (
     <div className="flex-row-center gap-[5px] w-full">
       { handleMoreDetail("floor price", floorPrice) }
       { handleMoreDetail("24h volume", volume24) }
       { handleMoreDetail("total volume", totalVolume) }
       { handleMoreDetail("owners", owners) }
       { handleMoreDetail("listed", listed) }
       { handleMoreDetail("24 sales", sales24) }
    </div>
  )
}

export default ColItemMoreDetail