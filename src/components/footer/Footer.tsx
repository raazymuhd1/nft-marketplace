import React from 'react'
import Image from "next/image"
import { footerLinks, footerSocials } from "@/utils/constants"
import { blockchain } from "@/assets"

const Footer = () => {
  return (
    <footer className="h-[150px] w-full bg-mainAlt p-[20px] flex-row-center justify-between">
      <aside className="flex flex-col gap-[15px]">
        <div className="flex-row-center gap-[10px]">
            <Image src={blockchain} alt="" className="w-[40px] h-[40px]" />
            <h3 className='font-bold lg:text-[20px] md:text-[18px] text-textWhite'> MiddleM </h3>
        </div>

        <p className="text-secondary"> The largest NFT marketplace of Layer 2 network </p>
      </aside>

      <aside className="flex flex-col gap-[15px]">
            {/* socials */}
          <div className="w-full justify-end flex-row-center gap-[15px]">
            { footerSocials.map(social => (
              <social.Logo key={social.id} size={30} className="text-textWhite cursor-pointer hover:translate-y-[2px]" />
            )) }
          </div>

          <div className="flex-row-center gap-[15px]">
             { footerLinks.map(link => (
                <a 
                  href={link.url} target='_blank' className="text-textBlue hover:text-textWhite"> {link.title} </a>
             )) }
          </div>
      </aside>

    </footer>
  )
}

export default Footer