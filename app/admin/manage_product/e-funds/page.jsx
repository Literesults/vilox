"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import { RiCoinsLine, RiHandCoinLine } from 'react-icons/ri'
import EFundChip from '@/app/components/organisms/EFundChip'
import { GiProfit, GiTrade } from 'react-icons/gi'
import { fetchEFund } from '@/app/services/authService'
import Modal from '@/app/components/organisms/Modal'
import Image from 'next/image'
import axios from 'axios'
import { API_BASE_URL, TOKEN } from '@/app/services/httpService'
import { BsCamera } from 'react-icons/bs'
import serialize from '@/app/hooks/Serialize'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [catego, setcate] = useState(["", "", "", "", "", "", "", "", "", "", ""])
  const [loading, setLoading] = useState(true)
  const headers = { 'Authorization': TOKEN }
  const [selectedImage, setSelectedImage] = useState();
  const [processing, setProcessing] = useState(false)
  const [errors, setErrors] = useState({})

  const fetch = async () => {
    const { status, data } = await fetchEFund().catch(err => console.log(err))
    if (status) {
      setcate(data.data[0]);
    }
    fetchSummary()
    setLoading(false)
  }


  const uploadImg = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }


  useEffect(() => {
    fetch()
  }, [])


  const submit = async (e) => {
    e.preventDefault();
    const data = serialize(e.target)
    const formdata = new FormData()
    setProcessing(true)
    formdata.append('image', selectedImage)
    formdata.append('name', data.name)
    formdata.append('sell_rate_low', data.sell_rate_low)
    formdata.append('sell_rate_high', data.sell_rate_high)
    await axios.post(`${API_BASE_URL}admin/efund/add_efund`, formdata, { headers }).then(async (res) => {
      await fetch()
      setSelectedImage()
      setShowModal(false)
    }).catch((error) => {
      error.response && setErrors(error.response.data.data);
    })
    setProcessing(false)
  }



  return (
    <AppLayout title="Summary of E-Fund Products">
      <Modal closeModal={() => { setShowModal(false) }} size={"lg"} isOpen={showModal}>
        <form onSubmit={(e) => { submit(e) }}>
          <div className='space-y-5'>
            <div className="h-24 w-24 rounded-full bg-gray-200 relative">
              {selectedImage && (
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="Thumb"
                  className="w-full h-full rounded-full"
                  width={'150'}
                  height={'150'}
                />
              )}
              <div onClick={() => document.querySelector('#img').click()} className="absolute flex items-center justify-center w-8 h-8 bg-black border-2 border-white rounded-full bottom-0 right-0 cursor-pointer text-white">
                <BsCamera />
              </div>
              <input name="image" id="img" onChange={(e) => uploadImg(e)} type="file" className="hidden" accept="image/png, image/gif, image/jpeg" />
            </div>
            <AppInput name="name" required label="Name" />
            <AppInput name="sell_rate_low" required label="Sell rate low " />
            <AppInput name="sell_rate_high" required label="Sell rate high " />
            <div className='flex gap-4 items-center'>
              <button disabled={processing} className='bg-black disabled:bg-opacity-30 text-white text-center flex-grow rounded-md py-2'>{processing ? "Saving..." : "Save"}</button>
              <div onClick={() => { setShowModal(false) }} className='hover:bg-gray-50 text-center flex-grow rounded-md py-2 cursor-pointer'>Cancel</div>
            </div>
          </div>
        </form>
      </Modal>
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

        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
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