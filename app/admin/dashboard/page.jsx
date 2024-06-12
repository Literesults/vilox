import React from 'react'
import AppLayout from '@component/layouts/appLayout'

function Page() {
  return (
    <AppLayout>
      <div className="">
        <div className="text-xl">Good evening Marv!</div>
        <div className="text-xs text-gray-400">Here`s today`s summary of your hiring process</div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2"></div>
        <div className=""></div>
      </div>
    </AppLayout>
  )
}

export default Page