import React from 'react'
import { SectionTitle } from "@/components"
import { trendingItems } from "@/utils/constants"
import TrendingCard from "./TrendingCard"

const TrendingNow = () => {
  return (
    <section className="container-center mt-[50px]">
        <SectionTitle text='Trending Now' styles='mb-[20px]' />

        <aside className="flex-row-center gap-[20px] overflow-x-scroll overflow-y-hidden min-w-[230vw] p-[20px]"> 
           { trendingItems.map(item => (
              <TrendingCard { ...item } />
           )) }
        </aside>
    </section>
  )
}

export default TrendingNow