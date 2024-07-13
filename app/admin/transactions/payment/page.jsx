"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import { CiCreditCardOff } from "react-icons/ci";
import { PiFingerprintSimpleThin, PiHandWithdraw } from "react-icons/pi";
import { MdOutlinePayments } from 'react-icons/md'
import { TbMoneybag } from 'react-icons/tb'
import { fetchTransaction, transactionsPaymentSummary } from '@/app/services/authService'
import AppPagination from '@/app/components/organisms/AppPagination'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [catego, setcate] = useState(["", "", "", "", "", "", "", "", "", "", ""])
  const [loading, setLoading] = useState(true)
  const [summary , setSummary] = useState([])

  const fetch = async () => {
    const { status, data } = await fetchTransaction().catch(err => console.log(err))
    if (status) {
      setcate(data.data[0]);
    }
    fetchSummary()
    setLoading(false)
  }


  const fetchSummary = async () => {
    const {status,data} = await transactionsPaymentSummary().catch(err => console.log(err))
    if (status) {
      setSummary(data.data);
    }
  }

  useEffect(() => {
    fetchSummary()
    fetch()
  }, [])


  return (
    <AppLayout title="Summary Payment transaction">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AppCard figure={summary?.total} icon={<MdOutlinePayments />} color="text-[#777fff]" text="Total Payment Request" bg="bg-[#777fff]" />
        <AppCard figure={summary?.success} icon={<PiHandWithdraw />} color="text-[#35C119]" text="Comfirmed Payment" bg="bg-[#35C119]" />
        <AppCard figure={summary?.proressing} icon={<TbMoneybag />} color="text-[#aaa9a4]" text="Pending Payment" bg="bg-[#aaa9a4]" />
        <AppCard figure={summary?.failed} icon={<CiCreditCardOff />} color="text-[#ef4444]" text="Declined Payment" bg="bg-[#ef4444]" />
      </div>
      <div className="space-y-5">
        <div className="flex">
          <div className="flex-grow">
            <div className="max-w-sm">
              <AppInput name="search" required label="Search " />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <table className='w-full'>
            <thead>
              <tr>
                <th className='bg-black px-3 py-2 rounded-tl-lg rounded-tr-lg sm:rounded-tr-none text-left text-white' scope="">Username</th>
                <th className='bg-black px-3 py-2 text-left text-white hidden sm:table-cell' scope="">Type</th>
                <th className='bg-black px-3 py-2 text-left text-white hidden lg:table-cell' scope="">Amount</th>
                <th className='bg-black px-3 py-2 text-left text-white hidden lg:table-cell' scope="">Transaction ID</th>
                <th className='bg-black px-3 py-2 rounded-tr-lg text-left hidden sm:table-cell text-white' scope="">Status</th>
              </tr>
            </thead>
            <tbody className='last:first:rounded-br-lg last:last:rounded-bl-lg'>
              {
                !loading && catego?.data?.map((data, i) => (
                  <tr className='odd:bg-white' key={i}>
                    <td className='px-3 py-2 text-[10px] text-left flex' scope="">
                      <div className="flex-grow flex items-center gap-2">
                        <div className="">
                          <div className="w-8 bg-gray-100 rounded-full h-8"></div>
                        </div>
                        <div className="">
                          <div className="font-bold">{data.user.name}</div>
                          <div className="text-xs text-gray-400">{data.user.email}</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end sm:hidden gap-2">
                        <div className="flex-grow">
                          <div className={`text-[9px] px-3 inline py-[2px] rounded-lg bg-opacity-10 ${data.status === "success" ? "text-success bg-success" : data.status === "failed" ? "text-danger bg-danger" : "text-yellow bg-yellow"}`}>{data.status}</div>
                        </div>
                      </div>
                    </td>
                    <td className='px-3 py-2 text-left capitalize hidden sm:table-cell' scope="">{data.type}</td>
                    <td className='px-3 py-2 text-left hidden lg:table-cell' scope="">&#8358;{data?.amount}</td>
                    <td className='px-3 py-2 text-left hidden lg:table-cell' scope="">{data?.transaction_id}</td>
                    <td className='px-3 py-2 text-left hidden sm:table-cell' scope="">
                      <div className="flex items-center gap-3">
                        <div className="flex-grow">
                          <div className={`text-[9px] px-3 inline py-[2px] rounded-lg bg-opacity-10 ${data.status === "success" ? "text-success bg-success" : data.status === "failed" ? "text-danger bg-danger" : "text-yellow bg-yellow"}`}>{data.status}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>

          <AppPagination totalRecords={catego} newData={(e) => setcate(e)} />
        </div>
      </div>
    </AppLayout>
  )
}

export default Page