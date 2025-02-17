import {ReactNode} from 'react'
import { MdContentCopy } from "react-icons/md";

interface IProps {
    id: number;
    contractAddress: string;
    itemsCount: string;
    createdAt: string;
    royalty: string;
}

const ColItemDetails = ({ id, contractAddress, itemsCount, createdAt, royalty }: IProps) => {

      const handleColDetail = (title: string, value: string): ReactNode => {
            return <div>
                 <p className="text-[12px]"> {title} <strong className="text-[12px] font-bold text-secondaryAlt"> {value} </strong> </p>
            </div>
        }

  return (
      <div 
        key={id}
        className="flex-row-center gap-[5px]"
        >
        <div className="flex-row-center gap-[10px]">
             {/* eth icon */}
            <p className="text-[12px] font-bold text-secondaryAlt"> {contractAddress.slice(0, 5)}...{contractAddress.slice(contractAddress.length-6, contractAddress.length-1)} </p>
            <MdContentCopy size={14} />
        </div>
        <div className="h-[15px] w-[2px] bg-secondaryAlt" />
        { handleColDetail("Items", itemsCount) }
        { handleColDetail("Created", createdAt) }
        { handleColDetail("Royalty", royalty) }
                                        </div>
  )
}

export default ColItemDetails