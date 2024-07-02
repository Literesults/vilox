"use client"
import React, { useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import CategoryChip from '@/app/components/organisms/CategoryChip'
import { CiCreditCard1, CiCreditCardOff } from "react-icons/ci";
import { PiCardsThree, PiHandWithdraw } from "react-icons/pi";
import { LiaCreditCardSolid } from "react-icons/lia";
import { MdOutlinePayments } from 'react-icons/md'
import { TbMoneybag } from 'react-icons/tb'

function Page() {
  const [catego, setcate] = useState(["", "", "", ""])
  return (
    <AppLayout title="Summary Payment transaction">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AppCard figure={68} icon={<MdOutlinePayments />} color="text-[#777fff]" text="Total Payment Request" bg="bg-[#777fff]" />
        <AppCard figure={27} icon={<PiHandWithdraw />} color="text-[#35C119]" text="Comfirmed Payment" bg="bg-[#35C119]" />
        <AppCard figure={1573} icon={<TbMoneybag />} color="text-[#aaa9a4]" text="Pending Payment" bg="bg-[#aaa9a4]" />
        <AppCard figure={37} icon={<CiCreditCardOff />} color="text-[#ef4444]" text="Declined Payment" bg="bg-[#ef4444]" />
      </div>
      <div className="space-y-5">
        <div className="flex">
          <div className="flex-grow">
            <div className="max-w-sm">
              <AppInput name="search" required label="Search " />
            </div>
          </div>
        </div>
        <div className="">
          <table className='w-full'>
            <thead>
              <tr>
                <th className='bg-black px-3 py-2 rounded-l-lg text-left text-white' scope="">Username</th>
                <th className='bg-black px-3 py-2 text-left text-white' scope="">Email</th>
                <th className='bg-black px-3 py-2 text-left text-white' scope="">Amount</th>
                <th className='bg-black px-3 py-2 rounded-r-lg text-left text-white' scope="">Status</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page