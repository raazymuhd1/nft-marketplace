import React from 'react'

const ItemHeader = () => {
  return (
    <div className="flex-row-center justify-between mt-[30px] mb-[10px] w-full">
        <p className="w-[50%] item-header"> Collection </p>

        <aside className='w-[50%] flex-row-center justify-end gap-[15px]'>
            <p className="item-header">Floor Price</p>
            <p className="item-header"> Volume </p>
        </aside>
    </div>
  )
}

export default ItemHeader