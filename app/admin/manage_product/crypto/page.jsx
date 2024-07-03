"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import { GiProfit, GiTrade } from "react-icons/gi";
import CryptoChip from '@/app/components/organisms/CryptoChip'
import { RiCoinsLine, RiHandCoinLine } from 'react-icons/ri'
import { addCrypto, fetchCrypto } from '@/app/services/authService'
import Modal from '@/app/components/organisms/Modal'
import Image from 'next/image'
import { uploadfile } from '@/app/hooks/imageUpload'
import serialize from '@/app/hooks/Serialize'
import useFormHandlerFormdata from '@/app/hooks/useFormHandlerFormdata'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [catego, setcate] = useState(["", "", "", "", "", "", "", "", "", "", ""])
  const [loading, setLoading] = useState(true)

  const fetch = async () => {
    const { status, data } = await fetchCrypto().catch(err => console.log(err))
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

  const addCoin = useFormHandlerFormdata({
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
      const { status, data } = await addCrypto(value).catch(err => console.log(err))
    }
  })



  return (
    <AppLayout title="Summary of Crypto Products">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AppCard figure={4535} icon={<RiCoinsLine />} color="text-[#1f4a41]" text="Total Coin" bg="bg-[#1f4a41]" />
        <AppCard figure={53} icon={<RiHandCoinLine />} color="text-[#13f444]" text="Total Trading" bg="bg-[#13f444]" />
        <AppCard figure={8234} icon={<GiTrade />} color="text-[#abc444]" text="Total Amount Traded " bg="bg-[#abc444]" />
        <AppCard figure={13316.89} icon={<GiProfit />} color="text-[#123abc]" text="Revenue" bg="bg-[#123abc]" />
      </div>
      <div className="space-y-5">
        <div className="flex">
          <div className="flex-grow">
            <div className="max-w-sm">
              <AppInput name="search" required label="Search Category" />
            </div>
          </div>
          <div onClick={() => setShowModal(true)} className="bg-black text-white py-3 font-bold px-6 text-sm rounded-md cursor-pointer">Add Crypto</div>
        </div>
        <Modal closeModal={() => { setShowModal(false) }} size={"lg"} isOpen={showModal}>
          <form onSubmit={(e) => {e.preventDefault();addCoin.submit()}} enctype="multipart/form-data">
            <div className='space-y-5'>
              <div>
                <div className="w-20 h-20 rounded-full bg-gray-100 relative">
                  <Image id="output" className="w-full h-full rounded-full" />
                  <label htmlFor="image" className="absolute w-8 h-8 border-2 border-white bottom-1 right-0 bg-black text-white rounded-full flex items-center justify-center">
                    <input accept="image/*" required id="image" onChange={(e) => {uploadImg(e);addCoin.value.image = e.target.value}} name="image" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                    <i className="ri-camera-line"></i>
                  </label>
                </div>
              </div>
              
              <AppInput onChange={(e) => addCoin.value.name = e.target.value} name="name" required label="Name" />
              <AppInput onChange={(e) => addCoin.value.symbol = e.target.value} name="symbol" required label="Symbol " />
              <AppInput onChange={(e) => addCoin.value.network = e.target.value} name="network" required label="Network " />
              <AppInput onChange={(e) => addCoin.value.sell_rate_low = e.target.value} name="sell_rate_low" required label="Sell rate low " />
              <AppInput onChange={(e) => addCoin.value.sell_rate_high = e.target.value} name="sell_rate_high" required label="Sell rate high " />
              <AppInput onChange={(e) => addCoin.value.wallet_address = e.target.value} name="wallet_address" required label="Wallet address " />
              <div className='flex gap-4 items-center'>
                <button disabled={addCoin.proccessing} className='bg-black disabled:bg-opacity-30 text-white text-center flex-grow rounded-md py-2'>{addCoin.proccessing ? "Saving":"Save"}</button>
                <div onClick={() => { setShowModal(false) }} className='hover:bg-gray-50 text-center flex-grow rounded-md py-2 cursor-pointer'>Cancel</div>
              </div>
            </div>
          </form>
        </Modal>

        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {
            !loading && catego.map((cat, i) => (
              <CryptoChip data={cat} key={i} />
            ))
          }
        </div>
      </div>
    </AppLayout>
  )
}

export default Page