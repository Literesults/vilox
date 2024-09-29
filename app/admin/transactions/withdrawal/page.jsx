"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import { CiCreditCardOff } from "react-icons/ci";
import { PiFingerprintSimpleThin, PiHandWithdraw } from "react-icons/pi";
import { MdOutlinePayments } from 'react-icons/md'
import { TbMoneybag } from 'react-icons/tb'
import { comfirmTransaction, fetchTransaction, transactionsWithdrawalSummary } from '@/app/services/authService'
import AppPagination from '@/app/components/organisms/AppPagination'
import Modal from '@/app/components/organisms/Modal'
import serialize from '@/app/hooks/Serialize'
import ResponseModal from '@/app/components/organisms/ResponseModal'
import { debounce } from '@/app/hooks/useDebounce'

function Page() {
  const [catego, setcate] = useState(["", "", "", "", "", "", "", "", "", "", ""])
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [x, setX] = useState({})
  const [summary, setSummary] = useState([])
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)

  const fetch = async () => {
    const { status, data } = await fetchTransaction().catch(err => console.log(err))
    if (status) {
      setcate(data.data[0]);
    }
    fetchSummary()
    setLoading(false)
  }



  const searchFN = debounce(async (e) => {
    const { status, data } = await fetchTransaction({ search: e }).catch(err => console.log(err))
    if (status) {
      setcate(data.data[0])
    }
  }, 3000);


  const submit = async (e) => {
    e.preventDefault();
    const val = serialize(e.target)
    setProcessing(true)
    const { status, data } = await comfirmTransaction(val).catch(err => console.log(err))
    if (status) {
      fetch()
      setX({})
    }
    setProcessing(false)
    setAlert(true)
    setAlertData(data)
  }


  const fetchSummary = async () => {
    const { status, data } = await transactionsWithdrawalSummary().catch(err => console.log(err))
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
      {
        Object.keys(x).length > 0 && (
          <Modal closeModal={() => setX({})} size={"sm"} isOpen={Object.keys(x).length > 0}>
            <form onSubmit={(e) => { submit(e) }} >
              <div className='space-y-5'>

                <div className="">
                  <div className="grid grid-cols-2">
                    <div className='col-span-2'>
                      <div className='font-bold'>Name:</div>
                      <div className='text-gray-500'>{x?.user.name}</div>
                    </div>
                    <div className='col-span-2'>
                      <div className='font-bold'>Email:</div>
                      <div className='text-gray-500'>{x?.user.email}</div>
                    </div>
                    <div className=''>
                      <div className='font-bold'>Phone:</div>
                      <div className='text-gray-500'>{x?.user.phone}</div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="grid grid-cols-2">
                    <div className=''>
                      <div className='font-bold'>Amount:</div>
                      <div className='text-gray-500'>&#8358;{Number(x?.amount).toLocaleString('en-US')}</div>
                    </div>
                    <div className=''>
                      <div className='font-bold'>Bank :</div>
                      <div className='text-gray-500'>{x.bank.bank_name}</div>
                    </div>
                    <div className=''>
                      <div className='font-bold'>Accoutn number:</div>
                      <div className='text-gray-500'>{x.bank.account_number}</div>
                    </div>
                    <div className=''>
                      <div className='font-bold'>Accoutn name:</div>
                      <div className='text-gray-500'>{x.bank.account_name}</div>
                    </div>
                  </div>
                </div>
                <input type='hidden' value={x.id} name='id' />
                <AppInput type={"select"} options={["confirm", "cancel"]} name="status" required label="Status" />
                <div className='flex gap-4 items-center'>
                  <button disabled={processing} className='bg-black disabled:bg-opacity-30 text-white text-center flex-grow rounded-md py-2'>{processing ? "Saving..." : "Save"}</button>
                  <div onClick={() => { setX({}) }} className='hover:bg-gray-50 text-center flex-grow rounded-md py-2 cursor-pointer'>Cancel</div>
                </div>
              </div>
            </form>
          </Modal>
        )
      }
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
              <AppInput name="search" onChange={(e) => searchFN(e.target.value)} required label="Search by Transaction ID " />
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
                        <div onClick={() => { setX(data) }} className="w-7 h-7 cursor-pointer rounded-md text-black flex items-center justify-center bg-gray-200 "><PiFingerprintSimpleThin /></div>
                      </div>
                    </td>
                    <td className='px-3 py-2 text-left capitalize hidden sm:table-cell' scope="">{data.type}</td>
                    <td className='px-3 py-2 text-left hidden lg:table-cell' scope="">&#8358;{new Intl.NumberFormat().format(data?.amount)}</td>
                    <td className='px-3 py-2 text-left hidden lg:table-cell' scope="">{data?.transaction_id}</td>
                    <td className='px-3 py-2 text-left hidden sm:table-cell' scope="">
                      <div className="flex items-center gap-3">
                        <div className="flex-grow">
                          <div className={`text-[9px] px-3 inline py-[2px] rounded-lg bg-opacity-10 ${data.status === "success" ? "text-success bg-success" : data.status === "failed" ? "text-danger bg-danger" : "text-yellow bg-yellow"}`}>{data.status}</div>
                        </div>
                        <div onClick={() => { setX(data) }} className="w-7 h-7 cursor-pointer rounded-md text-black flex items-center justify-center bg-gray-200 "><PiFingerprintSimpleThin /></div>
                      </div>
                    </td>
                  </tr>
                ))
              }

              {
                loading && ["", "", "", "", "", ""].map((data, i) => (
                  <tr className='odd:bg-white' key={i}>
                    <td className='px-3 py-2 text-[10px] text-left flex' scope="">
                      <div className="flex-grow flex items-center gap-2">
                        <div className="">
                          <div className="w-8 bg-gray-100 preload rounded-full h-8"></div>
                        </div>
                        <div className="w-full space-y-1">
                          <div className="font-bold preload w-1/2 py-2"></div>
                          <div className="text-xs preload w-2/3 pt-3 text-gray-400"></div>
                        </div>
                      </div>
                    </td>
                    <td className='px-3 py-2 text-left capitalize hidden sm:table-cell' scope="">
                      <div className="preload w-3/4 py-2"></div>
                    </td>
                    <td className='px-3 py-2 text-left hidden lg:table-cell' scope="">
                      <div className="preload w-3/4 py-2"></div>
                    </td>
                    <td className='px-3 py-2 text-left hidden lg:table-cell' scope="">
                      <div className="preload w-3/4 py-2"></div>
                    </td>
                    <td className='px-3 py-2 text-left hidden sm:table-cell' scope="">
                      <div className="flex items-center gap-3">
                        <div className="flex-grow">
                          <div className={`text-[9px] px-12 inline preload py-[2px] rounded-lg bg-opacity-10 `}></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <AppPagination totalRecords={catego} newData={(e) => setcate(e[0])} />
        </div>
      </div>
      <ResponseModal
        status={alertMsgData?.success}
        isOpen={alertMsg}
        onClose={() => setAlert(false)}
        message={alertMsgData?.message}
      />
    </AppLayout>
  )
}

export default Page