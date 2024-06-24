"use client"
import React, { useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import Link from 'next/link'

function Page() {
  const [topRank, setTopRank] = useState(["", "", "", "", ""])
  return (
    <AppLayout title={"Summary of Vilox users"}>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <AppCard figure={4535} icon={<i class="ri-user-star-line"></i>} color="text-[#13f444]" text="Total Active Users" bg="bg-[#13f444]" />
            <AppCard figure={53} icon={<i class="ri-user-forbid-line"></i>} color="text-[#ef4444]" text="Total Suspended Users" bg="bg-[#ef4444]" />
          </div>
          <div className="">
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='bg-black px-3 py-2 rounded-l-lg text-left text-white' scope="">Username</th>
                  <th className='bg-black px-3 py-2 text-left text-white' scope="">Email</th>
                  <th className='bg-black px-3 py-2 text-left text-white' scope="">Country</th>
                  <th className='bg-black px-3 py-2 rounded-r-lg text-left text-white' scope="">Status</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white space-y-4 px-4 py-6 rounded-lg">
          <div className="flex">
            <div className="flex-grow font-semibold">Top Users</div>
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
    </AppLayout>
  )
}

export default Page