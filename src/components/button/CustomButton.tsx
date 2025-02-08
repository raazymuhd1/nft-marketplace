import {FC, ReactNode } from 'react'

interface IProps {
    styles: string;
    children: ReactNode;
}

const CustomButton: FC<IProps> = ({ styles, children }) => {
  return (
    <button className={`${styles} p-[10px] border-none outline-none font-semibold rounded-[8px]`}>
        {children}
    </button>
  )
}

export default CustomButton