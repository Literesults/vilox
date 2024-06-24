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
            <AppCard figure={4535} icon={<RiCoinsLine />} color="text-[#1f4a41]" text="Total Coin" bg="bg-[#1f4a41]" />
            <AppCard figure={53} icon={<RiHandCoinLine />} color="text-[#13f444]" text="Total Trading" bg="bg-[#13f444]" />
          </div>
          <div className="flex">
            <div className="flex-grow">
              <div className="max-w-sm">
                <AppInput name="search" required label="Search Coin" />
              </div>
            </div>
            <div className="bg-black text-white py-3 font-bold px-6 text-sm rounded-md cursor-pointer">Add Coin</div>
          </div>
          <div className="">
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='bg-black px-3 py-2 rounded-l-lg text-left text-white' scope="">Coin</th>
                  <th className='bg-black px-3 py-2 w-32 text-left text-white' scope="">Network</th>
                  <th className='bg-black px-3 py-2 w-60 rounded-r-lg text-right text-white' scope="">Price</th>
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
                          <div className="text-xs font-bold">BTC</div>
                          <div className="text-gray-400 text-xs">Bitcoin</div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className='px-3 py-2 text-left' scope="">TRC20</th>
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