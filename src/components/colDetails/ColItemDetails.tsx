import {ReactNode} from 'react'
import Image from "next/image"
import { MdContentCopy } from "react-icons/md";
import { ether } from '@/assets';
interface IProps {
    id: number;
    contractAddress: string;
    itemsCount: string;
    createdAt: string;
    royalty: string;
}

const ColItemDetails = ({ id, contractAddress, itemsCount, createdAt, royalty }: IProps) => {

      const handleColDetail = (title: string, value: string): ReactNode => {
            return <p className="text-[12px] font-bold"> {title} <strong className="text-[12px] font-bold text-secondaryAlt"> {value} </strong> </p>
           
        }

  return (
      <div 
        key={id}
        className="flex-row-center gap-[5px]"
        >
        <div className="flex-row-center gap-[10px]">
             {/* eth icon */}
             <Image src={ether} alt="eth-icon" className="w-[15px] h-[15px] object-cover" />
            <p className="text-[12px] font-bold text-secondaryAlt"> {contractAddress.slice(0, 5)}...{contractAddress.slice(contractAddress.length-6, contractAddress.length-1)} </p>
            <MdContentCopy size={14} className="cursor-pointer" />
        </div>
        <div className="h-[15px] w-[2px] bg-secondaryAlt" />
        { handleColDetail("Items", itemsCount) }
        { handleColDetail("Created", createdAt) }
        { handleColDetail("Royalty", royalty) }
                                        </div>
  )
}

export default ColItemDetails