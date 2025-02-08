import React from 'react'

type IProps = {
    text: string;
    styles: string;
}

const SectionTitle = ({text, styles}: IProps) => {
  return (
    <div className='w-[30%]'>
        <h2 className={`w-full text-[35px] font-bold ${styles}`}>{text}</h2>
    </div>
  )
}

export default SectionTitle