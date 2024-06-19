import React from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'

function Page() {
  return (
    <AppLayout title={"Summary on Crypto orders"}>
      <div className="grid sm:grid-cols-3 gap-5">
        <AppCard figure={234535} icon={<i class="ri-exchange-funds-line"></i>} color="text-[#000000]" text="Total Crypto orders" bg="bg-[#000000]" />
        <AppCard figure={3053} icon={<i class="ri-pass-pending-line"></i>} color="text-[#fff444]" text="Pending Crypto orders" bg="bg-[#fff444]" />
        <AppCard figure={34524} icon={<i class="ri-bard-line"></i>} color="text-[#11c9a4]" text="Completed Crypto orders" bg="bg-[#11c9a4]" />
      </div>
      <div className="">
        <table className='w-full'>
          <thead>
            <tr>
              <th className='bg-black px-3 py-2 rounded-l-lg text-left text-white' scope="">Username</th>
              <th className='bg-black px-3 py-2 text-left text-white' scope="">Email</th>
              <th className='bg-black px-3 py-2 text-left text-white' scope="">Type</th>
              <th className='bg-black px-3 py-2 text-left text-white' scope="">Amount</th>
              <th className='bg-black px-3 py-2 rounded-r-lg text-left text-white' scope="">Status</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </AppLayout>
  )
}

export default Page