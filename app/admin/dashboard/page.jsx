"use client"
import React, { useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import LineChart from '@/app/components/organisms/LineChart'
import { IoMdArrowDropdown } from "react-icons/io";
import Link from 'next/link'
import PieChart from '@/app/components/organisms/PieChart'

function Page() {
  const [showOption, setShowOption] = useState(false)
  const [option, setOption] = useState("Transactions")
  const [topRank, setTopRank] = useState(["", "", "", "", ""])
  const [pendingGiftCard, setPendingGiftCard] = useState(["", "", ""])
  return (
    <AppLayout title={"Here`s today`s summary of your hiring process"}>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <div className="grid sm:grid-cols-3 gap-5">
            <AppCard figure={43053} icon={<i class="ri-group-line"></i>} color="text-[#777fff]" text="New Users" bg="bg-[#777fff]" />
            <AppCard figure={20034535} icon={<i class="ri-exchange-funds-line"></i>} color="text-[#900235]" text="New Transactions" bg="bg-[#900235]" />
            <AppCard figure={52344} icon={<i class="ri-discount-percent-line"></i>} color="text-[#fff444]" text="New Order" bg="bg-[#fff444]" />
          </div>
          <div className="pb-2 bg-white rounded-lg">
            <div className="flex relative items-center px-6">
              <div className="left-6 flex-grow">
                <div onMouseLeave={() => setShowOption(false)} onClick={() => setShowOption(!showOption)} className="flex">
                  <div className="pt-4 pb-0 font-semibold flex items-center gap-6 cursor-pointer">{option} <IoMdArrowDropdown /></div>
                  <div className={`absolute left-6 top-10 shadow-md border z-40 bg-white rounded-lg p-1 ${!showOption && "hidden"}`}>
                    <div onClick={() => { setOption("Transactions") }} className="pl-3 pr-6 cursor-pointer hover:bg-gray-100 rounded-md py-1">Transactions</div>
                    <div onClick={() => { setOption("Orders") }} className="pl-3 pr-6 cursor-pointer hover:bg-gray-100 rounded-md py-1">Orders</div>
                  </div>
                </div>
              </div>
              <div className="">Last 7 Days</div>
            </div>
            <div className="h-64 md:h-96"><LineChart /></div>
          </div>
          <div className="bg-white space-y-4 px-4 py-6 rounded-lg">
            <div className="flex">
              <div className="flex-grow font-semibold">Top Users</div>
              <Link href="/admin/users"><div className="text-blue text-sm">View all users</div></Link>

            </div>
            <div className="divide-y divide-gray-200">
              {
                topRank.map((user, i) => (
                  <div key={i} className="flex py-2 items-center">
                    <div className="flex-grow flex items-center gap-2">
                      <div className="">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="">
                        <div className="text-xs font-bold">Ebube Roderick</div>
                        <div className="text-gray-400 text-xs">ebuberoderick2@gmail.com</div>
                      </div>
                    </div>
                    <div className="text-sm">&#8358; 34,535</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="space-y-2 bg-white rounded-lg px-4 py-4">
            <div className="font-bold text-lg">Pending Orders</div>
            <div className="space-y-5">
              <div className="space-y-1 bg-blue p-3 bg-opacity-5 rounded-lg">
                <div className="font-bold text-gray-400 text-sm">Gift Card</div>
                <div className="">
                  {
                    pendingGiftCard.map((giftCard, i) => (
                      <div key={i} className="flex py-2 items-center">
                        <div className="flex-grow flex items-center gap-2">
                          <div className="">
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                          </div>
                          <div className="">
                            <div className="text-xs font-bold">Ebube Roderick</div>
                            <div className="text-gray-400 text-xs">ebuberoderick2@gmail.com</div>
                          </div>
                        </div>
                        <div className="text-sm">&#8358; 34,535</div>
                      </div>
                    ))
                  }
                </div>
                <Link href="/admin/orders/gift_card"><div className="bg-blue text-white text-center py-2 rounded-lg">View All</div></Link>
              </div>
              <div className="space-y-1 bg-yellow p-3 bg-opacity-5 rounded-lg">
                <div className="font-bold text-gray-400 text-sm">Crypto</div>
                <div className="">
                  {
                    pendingGiftCard.map((giftCard, i) => (
                      <div key={i} className="flex py-2 items-center">
                        <div className="flex-grow flex items-center gap-2">
                          <div className="">
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                          </div>
                          <div className="">
                            <div className="text-xs font-bold">Ebube Roderick</div>
                            <div className="text-gray-400 text-xs">ebuberoderick2@gmail.com</div>
                          </div>
                        </div>
                        <div className="text-sm">&#8358; 34,535</div>
                      </div>
                    ))
                  }
                </div>
                <Link href="/admin/orders/gift_card"><div className="bg-yellow text-center py-2 rounded-lg">View All</div></Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg">
            <div className=""></div>
            <div className="h-72"><PieChart series={[45, 35, 54]} labels={["Gift Cards", "Crypto", "E-funds"]} /></div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page