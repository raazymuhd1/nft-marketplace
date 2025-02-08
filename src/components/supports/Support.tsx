import React from 'react'
import SupportCard from "./SupportCard"
import tradeSup from "@/assets/supports/trade-support.svg"
import collectSup from "@/assets/supports/collection-support.svg"

const Support = () => {
  return (
    <section className="mt-[30px] w-full p-[20px] flex-row-center gap-[20px] justify-center h-[550px] ">
        <SupportCard {
          ...{ title: "Collection Support", desc: "Click here, get a quick collection support. We provide Launchpad, Verified Collection and Verified Creator services.", url: "/#", img: collectSup }
        } />
        <SupportCard {
          ...{ title: "Trading Support", desc: "Click here, get a quick answer if you have any questions with using MiddleM.", url: "/#", img: tradeSup }
        } />
    </section>
  )
}

export default Support