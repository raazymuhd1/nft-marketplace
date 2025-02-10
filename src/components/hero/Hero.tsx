"use client"
import {useState} from 'react'
import Image from 'next/image'
import { CustomButton } from "@/components"
import { heroSlides } from '@/utils/constants'

const Hero = () => {
    const [slides, setSlides] = useState(heroSlides)
    // const [slideTrig, setSlideTrig] = useState([])

  return (
    <section className={`container-center h-[450px] w-full mt-[30px]`}>

       <div className="h-full flex flex-col gap-[25px] w-[95%] mx-auto p-[20px] bg-secondary rounded-[8px]">

          <div className="flex w-full h-[90%]">
            { slides.map(slide => (
              <aside 
                key={slide.id}
                className="flex items-center h-full p-[25px] w-[90%] mx-auto justify-between cursor-pointer">
                  {/* items info */}
                  <div 
                    className="flex flex-col gap-[10px]">
                    <h3 
                      className="font-bold md:text-[45px] lg:text-[50px] text-[25px] "> {slide.title} </h3>
                    <p className="lg:text-[18px] md:text-[16px] text-[14px]"> {slide.desc} </p>
                    <CustomButton styles='bg-main text-textWhite w-[200px]' >
                      Buy
                    </CustomButton>
                  </div>

                  {/* items extra-info */}
                  <aside className='w-[40%] h-full relative top-0'>
                    <Image src={slide.img} alt="img" className="h-full w-full rounded-[8px] object-cover" />
                    <div className="flex items-center gap-[10px] absolute bottom-[10px] left-[10px]">
                        <Image src={slide.profileImg} alt="profile-img" className='w-[40px] h-[40px] rounded-[50%]' />
                        <h4 className="font-extrabold lg:text-[18px] md:text-[16px] text-[14px] text-textWhite"> {slide.title} </h4>
                    </div>
                  </aside>

              </aside>
              )) }
           </div>

          {/* slide trigger */}
          <div className="flex items-center gap-[10px] justify-center">
            { [1, 2, 3].map((slider, idx) => (
              <div 
                key={idx}
                className={`w-[100px] h-[4px] bg-textWhite`}>
                {/* slide trigger */}
              </div>
            )) }
          </div>
        </div>   

    </section>
  )
}

export default Hero