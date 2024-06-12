import React from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import LineChart from '@/app/components/organisms/LineChart'

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
          <div className="h-96 bg-white rounded-lg">
            <LineChart />
          </div>
          <div className=""></div>

        </div>
        <div className=""></div>
      </div>
    </AppLayout>
  )
}

export default Page