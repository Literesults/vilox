"use client"
import React, { useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import { RiCoinsLine, RiHandCoinLine } from "react-icons/ri";
import AppCard from '@/app/components/organisms/AppCard'
import Link from 'next/link'
import AppInput from '@/app/components/organisms/AppInput'

function Page() {
  const [topRank, setTopRank] = useState(["", "", "", "", ""])
  return (
    <AppLayout title={"Summary of Vilox users"}>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <AppCard figure={65} icon={<RiCoinsLine />} color="text-[#1f4a41]" text="Total E-Funds" bg="bg-[#1f4a41]" />
            <AppCard figure={17} icon={<RiHandCoinLine />} color="text-[#13f444]" text="Total Trading" bg="bg-[#13f444]" />
          </div>
          <div className="flex">
            <div className="flex-grow">
              <div className="max-w-sm">
                <AppInput name="search" required label="Search Coin" />
              </div>
            </div>
            <div className="bg-black text-white py-3 font-bold px-6 text-sm rounded-md cursor-pointer">Add E-Fund</div>
          </div>
          <div className="">
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='bg-black px-3 py-2 rounded-l-lg text-left text-white' scope="">E-Fund</th>
                  <th className='bg-black px-3 py-2 rounded-r-lg text-right text-white' scope="">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className='px-3 py-2 rounded-l-lg text-left' scope="">
                    <div className="">
                      <div className="flex items-center gap-2">
                        <div className="">
                          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="">
                          <div className="text-xs font-bold">Symbol</div>
                          <div className="text-gray-400 text-xs">Name</div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className='px-3 py-2 rounded-r-lg text-right' scope="">&#8358; 34,535</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white space-y-4 px-4 py-6 rounded-lg">
          <div className="flex">
            <div className="flex-grow font-semibold">Top Trading</div>
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
                      <div className="text-xs font-bold">BTC</div>
                      <div className="text-gray-400 text-xs">Bitcoin</div>
                    </div>
                  </div>
                  <div className="text-sm">&#8358; 34,535</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page