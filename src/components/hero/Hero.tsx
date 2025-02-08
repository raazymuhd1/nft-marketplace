"use client"
import {useState} from 'react'
import Image from 'next/image'
import { CustomButton } from "@/components"
import { heroSlides } from '@/utils/constants'

const Hero = () => {
    const [slides, setSlides] = useState(heroSlides)

  return (
    <section className={`w-full overflow-x-scroll h-[430px] mt-[30px] rounded-[8px] p-[15px] flex items-center justify-between bg-secondary`}>

       <div className="w-full h-full flex flex-col">
            { slides.map(slide => (
           <aside 
             key={slide.id}
             className="flex items-center h-full p-[15px] w-[90%] mx-auto justify-between">
                <div 
                  className="flex flex-col gap-[10px]">
                  <h3 
                    className="font-bold md:text-[45px] lg:text-[50px] text-[25px] "> {slide.title} </h3>
                  <p className="lg:text-[18px] md:text-[16px] text-[14px]"> {slide.desc} </p>
                  <CustomButton styles='bg-main text-textWhite w-[200px]' >
                    Buy
                  </CustomButton>
                </div>

                <aside className='w-[40%] h-full'>
                  <Image src={slide.img} alt="img" className="h-full w-full rounded-[8px] object-cover " />
                   <div className="flex items-center gap-[10px]">
                      <Image src={slide.profileImg} alt="profile-img" className='w-[40px] h-[40px] rounded-[50%]' />
                   </div>
                </aside>
            </aside>
            )) }

          {/* slide trigger */}
        </div>   

    </section>
  )
}

export default Hero