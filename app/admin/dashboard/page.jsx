import React from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import LineChart from '@/app/components/organisms/LineChart'
import { IoMdArrowDropdown } from "react-icons/io";

function Page() {
  return (
    <AppLayout>
      <div className="">
        <div className="text-xl">Good evening Marv!</div>
        <div className="text-xs text-gray-400">Here`s today`s summary of your hiring process</div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <div className="grid sm:grid-cols-3 gap-5">
            <AppCard color="text-[#777fff]" text="New Users" bg="bg-[#777fff]" />
            <AppCard color="text-[#900235]" text="New Transactions" bg="bg-[#900235]" />
            <AppCard color="text-[#fff444]" text="New Order" bg="bg-[#fff444]" />
          </div>
          <div className="pb-2 bg-white rounded-lg">
            <div className="flex relative items-center px-6">
              <div className="left-6 flex-grow">
                <div className="pt-4 pb-0 font-semibold flex items-center gap-3 cursor-pointer">Transactions <IoMdArrowDropdown /></div>
                <div className="absolute top-10 shadow-md border z-40 bg-white rounded-lg p-1 left-0">
                  <div className="pl-3 pr-6 cursor-pointer hover:bg-gray-100 rounded-md py-1">Transactions</div>
                  <div className="pl-3 pr-6 cursor-pointer hover:bg-gray-100 rounded-md py-1">Orders</div>
                </div>
              </div>
              <div className="">Last 7 Days</div>
            </div>
            <div className="h-64 md:h-96"><LineChart /></div>
          </div>
          <div className=""></div>

        </div>
        <div className=""></div>
      </div>
    </AppLayout>
  )
}

export default Page