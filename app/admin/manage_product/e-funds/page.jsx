"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import { RiCoinsLine, RiHandCoinLine } from 'react-icons/ri'
import EFundChip from '@/app/components/organisms/EFundChip'
import { GiProfit, GiTrade } from 'react-icons/gi'
import { addEFund, fetchEFund } from '@/app/services/authService'
import Modal from '@/app/components/organisms/Modal'
import useFormHandlerFormdata from '@/app/hooks/useFormHandlerFormdata'
import Image from 'next/image'
import { uploadfile } from '@/app/hooks/imageUpload'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [catego, setcate] = useState(["", "", "", "", "", "", "", "", "", "", ""])
  const [loading, setLoading] = useState(true)

  const fetch = async () => {
    const { status, data } = await fetchEFund().catch(err => console.log(err))
    if (status) {
      setcate(data.data[0]);
    }
    setLoading(false)
  }

  const uploadImg = async (e) => {
    uploadfile(e)
  }

  useEffect(() => {
    fetch()
  }, [])

  const addEf = useFormHandlerFormdata({
    required: {
      // image: "",
      // name: "",
      // symbol: "",
      // network: "",
      // sell_rate_low: "",
      // sell_rate_high: "",
      // wallet_address: ""
    },
    initialValues: {
      image: "",
      name: "",
      symbol: "",
      network: "",
      sell_rate_low: "",
      sell_rate_high: "",
      wallet_address: ""
    },
    onSubmit: async (value) => {
      console.log(value);
      const { status, data } = await addEFund(value).catch(err => console.log(err))
    }
  })




  return (
    <AppLayout title="Summary of E-Fund Products">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AppCard figure={19} icon={<RiCoinsLine />} color="text-[#1f4a41]" text="Total Coin" bg="bg-[#1f4a41]" />
        <AppCard figure={63} icon={<RiHandCoinLine />} color="text-[#13f444]" text="Total Trading" bg="bg-[#13f444]" />
        <AppCard figure={729} icon={<GiTrade />} color="text-[#abc444]" text="Total Amount Traded " bg="bg-[#abc444]" />
        <AppCard figure={2189.89} icon={<GiProfit />} color="text-[#123abc]" text="Revenue" bg="bg-[#123abc]" />
      </div>
      <div className="space-y-5">
        <div className="flex">
          <div className="flex-grow">
            <div className="max-w-sm">
              <AppInput name="search" required label="Search Category" />
            </div>
          </div>
          <div onClick={() => setShowModal(true)} className="bg-black text-white py-3 font-bold px-6 text-sm rounded-md cursor-pointer">Add E-Fund</div>
        </div>
        <Modal closeModal={() => { setShowModal(false) }} size={"lg"} isOpen={showModal}>
          <form onSubmit={(e) => { e.preventDefault(); addEf.submit() }} enctype="multipart/form-data">
            <div className='space-y-5'>
              <div>
                <div className="w-20 h-20 rounded-full bg-gray-100 relative">
                  <Image id="output" className="w-full h-full rounded-full" />
                  <label htmlFor="image" className="absolute w-8 h-8 border-2 border-white bottom-1 right-0 bg-black text-white rounded-full flex items-center justify-center">
                    <input accept="image/*" required id="image" onChange={(e) => { uploadImg(e); addEf.value.image = e.target.value }} name="image" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                    <i className="ri-camera-line"></i>
                  </label>
                </div>
              </div>

              <AppInput onChange={(e) => addEf.value.name = e.target.value} name="name" required label="Name" />
              <AppInput onChange={(e) => addEf.value.sell_rate_low = e.target.value} name="sell_rate_low" required label="Sell rate low " />
              <AppInput onChange={(e) => addEf.value.sell_rate_high = e.target.value} name="sell_rate_high" required label="Sell rate high " />
              <div className='flex gap-4 items-center'>
                <button disabled={addEf.proccessing} className='bg-black disabled:bg-opacity-30 text-white text-center flex-grow rounded-md py-2'>{addEf.proccessing ? "Saving" : "Save"}</button>
                <div onClick={() => { setShowModal(false) }} className='hover:bg-gray-50 text-center flex-grow rounded-md py-2 cursor-pointer'>Cancel</div>
              </div>
            </div>
          </form>
        </Modal>
        <div className="grid sm:grid-cols-3 gap-5">
          {
            !loading && catego.map((cat, i) => (
              <EFundChip data={cat} key={i} />
            ))
          }
        </div>
      </div>
    </AppLayout>
  )
}

export default Page