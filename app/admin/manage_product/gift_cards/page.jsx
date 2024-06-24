"use client"
import React, { useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import CategoryChip from '@/app/components/organisms/CategoryChip'
import { CiCreditCard1, CiCreditCardOff } from "react-icons/ci";
import { PiCardsThree } from "react-icons/pi";
import { LiaCreditCardSolid } from "react-icons/lia";

function Page() {
  const [catego, setcate] = useState(["", "", "", ""])
  return (
    <AppLayout title="Summary of Gift card Products">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AppCard figure={23} icon={<PiCardsThree />} color="text-[#777fff]" text="Gift Card Categories" bg="bg-[#777fff]" />
        <AppCard figure={1603} icon={<LiaCreditCardSolid />} color="text-[#900235]" text="Total Gift Cards" bg="bg-[#900235]" />
        <AppCard figure={1573} icon={<CiCreditCard1 />} color="text-[#11c9a4]" text="Active Gift Cards" bg="bg-[#11c9a4]" />
        <AppCard figure={37} icon={<CiCreditCardOff />} color="text-[#ef4444]" text="Inactive Gift Cards" bg="bg-[#ef4444]" />
      </div>
      <div className="space-y-5">
        <div className="flex">
          <div className="flex-grow">
            <div className="max-w-sm">
              <AppInput name="search" required label="Search Category" />
            </div>
          </div>
          <div className="bg-black text-white py-3 font-bold px-6 text-sm rounded-md cursor-pointer">Add Category</div>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {
            catego.map((cat, i) => (
              <CategoryChip key={i} />
            ))
          }
        </div>
      </div>
    </AppLayout>
  )
}

export default Page