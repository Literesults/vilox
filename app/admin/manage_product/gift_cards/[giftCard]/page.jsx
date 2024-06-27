"use client"
import React, { useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import EFundChip from '@/app/components/organisms/EFundChip'
import { TbGiftCard } from "react-icons/tb";
import { MdCardGiftcard } from "react-icons/md";
import { RiCoinsLine, RiHandCoinLine } from 'react-icons/ri'
import { GiProfit, GiTrade } from 'react-icons/gi'
import { CiCreditCard2, CiCreditCardOff } from 'react-icons/ci'

function Page({ params }) {
  // {params.giftCard}
  const [catego, setcate] = useState(["", "", "", ""])
  return (
    <AppLayout title={`Details of ${params.giftCard}`}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AppCard figure={7} icon={<TbGiftCard />} color="text-[#1f4a41]" text={`Total ${params.giftCard} Gift Card`} bg="bg-[#1f4a41]" />
        <AppCard figure={63} icon={<MdCardGiftcard />} color="text-[#abc444]" text={`Total ${params.giftCard} Trading`} bg="bg-[#abc444]" />
        <AppCard figure={729} icon={<CiCreditCard2 />} color="text-[#123abc]" text={`Total Active Gift Card`} bg="bg-[#123abc]" />
        <AppCard figure={2189.89} icon={<CiCreditCardOff />} color="text-[#ef4444]" text="Total Inactive Gift Card" bg="bg-[#ef4444]" />
      </div>
      <div className="space-y-5">
        <div className="flex">
          <div className="flex-grow">
            <div className="max-w-sm">
              <AppInput name="search" required label="Search Category" />
            </div>
          </div>
          <div className="bg-black text-white py-3 font-bold px-6 text-sm rounded-md cursor-pointer">Add Gift Card</div>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {
            catego.map((cat, i) => (
              <EFundChip key={i} />
            ))
          }
        </div>
      </div>
    </AppLayout>
  )
}

export default Page