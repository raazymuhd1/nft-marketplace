import React from 'react'

interface IProps {
    title: string;
    styles: string;
}

const ColSidebarTitle = ({title, styles}: IProps) => {
  return ( <h3 className="font-bold text-[1vmax] w-full"> {title} </h3>
  )
}

export default ColSidebarTitle