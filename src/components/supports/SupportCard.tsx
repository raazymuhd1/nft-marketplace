import React from 'react'
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { CustomButton } from "@/components"

type IProps = {
    title: string;
    desc: string;
    url: string;
    img: StaticImageData;
}

const SupportCard = ({ title, desc, url, img }: IProps ) => {
  return (
    <section className="flex w-[30%] h-[70%] flex-col gap-[20px] p-[25px] radius bg-secondary justify-center">
        <div className='flex-col-notcenter gap-[10px] h-[50%] w-[60%]'>
            <h2 className="font-bold lg:text-[30px] text-[18px]" > {title} </h2>
            <p className="font-normal lg:text-[16px] text-[14px] "> {desc} </p>
        </div>

        <div className="flex-row-center w-full h-[50%] justify-between">
            <Link href={url}>
                <CustomButton styles='bg-main text-textWhite w-[200px] '> Apply Support </CustomButton>
            </Link>
            <Image src={img} alt="support-img" className="w-[150px] h-[150px]" />
        </div>
    </section>
  )
}

export default SupportCard