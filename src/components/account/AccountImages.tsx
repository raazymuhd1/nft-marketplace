
import {useRef, useState} from 'react'
import { FaPlus } from "react-icons/fa";

const AccountImages = () => {
        const inputRef = useRef<HTMLInputElement>(null)
        const secInputRef = useRef<HTMLInputElement>(null)
        const [selectedImg, setSelectedImg] = useState<string>("")

        const handleFileSelection = () => {
            if (!inputRef.current) return;
            inputRef.current.focus()
            console.log(inputRef.current.value)
        }

        const handleAnotherSelection = () => {
            if (!secInputRef.current) return;
            secInputRef.current.focus()
        }

  return (
    <div 
       tabIndex={0}
       id="drop_zone"
        className="mt-[20px] h-[20%]">
            <h3 className="font-bold text-[1vmax]"> Profile Picture </h3> 
                {/* file selection */}
                <aside className="border-[1px] border-secondaryAlt p-[10px] radius flex-row-center gap-[20px] justify-between h-[200px]">
                    <div className="h-full bg-secondary w-[200px] rounded-[50%]">
                        <input
                                ref={inputRef} 
                                type="file" name="img-file" id="img-file" className='opacity-0'
                                placeholder='select img'
                        />
                        <label
                            onClick={handleFileSelection} 
                            className="flex justify-center items-center translate-y-[-30px] h-full w-full text-center p-[10px] cursor-pointer"
                                    htmlFor="img-file"> 
                                    <FaPlus size={35} /> 
                        </label>
                    </div>
    
                       <div className="w-[60%] h-full flex flex-col justify-center">
                            <h4 className='text-[8px] md:text-[10px] lg:text-[12px] font-semibold text-secondaryAlt'> Support PNG, JPG, GIF, AVIF, 400 x 400 recommended, max size 1MB </h4>
                        <div className="w-full">
                        <input
                                ref={secInputRef} 
                                type="file" name="img-file" id="img-file" className='opacity-0'
                                placeholder='select img'
                                />
                        <label
                                onClick={handleAnotherSelection} 
                                className="block w-[150px] border-textBlue border-[1px] py-[5px] px-[10px] cursor-pointer radius text-center text-textBlue font-semibold text-[.8vmax] "
                                    htmlFor="img-file"> Select File
                        </label>
                    </div>
                </div>
         </aside> 
    </div>
  )
}

export default AccountImages