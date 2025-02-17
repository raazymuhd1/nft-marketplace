import {ReactNode} from 'react'

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
        return 
    }

  return (
     <div className="flex flex-col gap-[2px]">
        <div className="flex-row-center gap-[2px]">
            {/* eth icon */}
            <h3 className="text-[14px] md:text-[16px] font-bold"> 3.146 </h3>
        </div>
        <p className="text-[12px] text-secondaryAlt"> floor price </p>
    </div>
  )
}

export default ColItemMoreDetail