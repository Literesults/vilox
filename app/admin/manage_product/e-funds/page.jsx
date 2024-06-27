"use client"
import React, { useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import { RiCoinsLine, RiHandCoinLine } from 'react-icons/ri'
import EFundChip from '@/app/components/organisms/EFundChip'
import { GiProfit, GiTrade } from 'react-icons/gi'

function Page() {
  const [catego, setcate] = useState(["", "", "", ""])
  return (
    <AppLayout title="Summary of E-Fund Products">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AppCard figure={19} icon={<RiCoinsLine />} color="text-[#1f4a41]" text="Total Coin" bg="bg-[#1f4a41]" />
        <AppCard figure={63} icon={<RiHandCoinLine />} color="text-[#13f444]" text="Total Trading" bg="bg-[#13f444]" />
        <AppCard figure={729} icon={<GiTrade />} color="text-[#abc444]" text="Total Amount Traded " bg="bg-[#abc444]" />
        <AppCard figure={2189.89} icon={<GiProfit />} color="text-[#123abc]" text="Revenue" bg="bg-[#123abc]" />
      </div>
      <div className="space-y-5">
        <div className="flex">
          <div className="flex-grow">
            <div className="max-w-sm">
              <AppInput name="search" required label="Search Category" />
            </div>
          </div>
          <div className="bg-black text-white py-3 font-bold px-6 text-sm rounded-md cursor-pointer">Add E-Fund</div>
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