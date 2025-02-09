import React from 'react'

const ColInput = () => {
  return (
      <div className="flex-row-center gap-[15px] mt-[20px] w-full">
                <div className="flex flex-col gap-[10px] w-[60%]">
                    <label
                        className="font-bold" 
                        htmlFor="col-name">Collection Name</label>
                    <input
                        placeholder='Name your collection' 
                        className="bg-secondary outline-none placeholder:font-medium radius py-[6px] px-[10px] border-[1px]"
                        type="text" name="col-name" id="col-name" />
                </div>
                <div className="flex flex-col gap-[10px] w-[40%]">
                    <label
                        className="font-bold" 
                        htmlFor="col-name">Symbol</label>
                    <input
                        placeholder="NYC"
                        className="bg-secondary outline-none placeholder:font-medium radius py-[6px] px-[10px] border-[1px]" 
                        type="text" name="col-name" id="col-name" />
                </div>
      </div>
  )
}

export default ColInput