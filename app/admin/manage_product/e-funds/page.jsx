"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import { RiCoinsLine, RiHandCoinLine } from 'react-icons/ri'
import EFundChip from '@/app/components/organisms/EFundChip'
import { GiProfit, GiTrade } from 'react-icons/gi'
import { efundSummary, fetchEFund } from '@/app/services/authService'
import Modal from '@/app/components/organisms/Modal'
import Image from 'next/image'
import axios from 'axios'
import { API_BASE_URL, TOKEN } from '@/app/services/httpService'
import { BsCamera } from 'react-icons/bs'
import serialize from '@/app/hooks/Serialize'
import ResponseModal from '@/app/components/organisms/ResponseModal'
import { debounce } from '@/app/hooks/useDebounce'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [catego, setcate] = useState(["", "", "", "", "", "", "", "", "", "", ""])
  const [loading, setLoading] = useState(true)
  const headers = { 'Authorization': TOKEN }
  const [selectedImage, setSelectedImage] = useState();
  const [summary, setSummary] = useState([])
  const [processing, setProcessing] = useState(false)
  const [errors, setErrors] = useState({})
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)

  const fetch = async () => {
    const { status, data } = await fetchEFund().catch(err => console.log(err))
    if (status) {
      setcate(data.data[0]);
    }
    fetchSummary()
    setLoading(false)
  }

  const searchFN = debounce(async (e) => {
    const { status, data } = await fetchEFund({ search: e }).catch(err => console.log(err))
    if (status) {
      setcate(data.data[0]);
    }
  }, 3000);
  const uploadImg = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }


  const fetchSummary = async () => {
    const { status, data } = await efundSummary().catch(err => console.log(err))
    if (status) {
      setSummary(data.data);
    }
  }


  useEffect(() => {
    fetchSummary()
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
      setAlert(true)
      setAlertData(res.data)
    }).catch((error) => {
      error.response && setErrors(error.response.data.data);
      setAlert(true)
      error.response && setAlertData(error.response.data)
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
              <input name="image" id="img" onChange={(e) => uploadImg(e)} type="file" className="opacity-0" accept="image/png, image/gif, image/jpeg" />
            </div>
            <AppInput name="name" required label="Name" />
            <AppInput name="sell_rate_low" required label="Sell rate low " />
            <AppInput name="sell_rate_high" required label="Sell rate high " />
            <div className='flex gap-4 items-center'>
              <button disabled={processing} className='bg-black disabled:bg-opacity-30 text-white text-center flex-grow rounded-md py-2'>{processing ? "Confirming..." : "Confirm"}</button>
              <div onClick={() => { setShowModal(false) }} className='hover:bg-gray-50 text-center flex-grow rounded-md py-2 cursor-pointer'>Cancel</div>
            </div>
          </div>
        </form>
      </Modal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AppCard figure={summary.total} icon={<RiCoinsLine />} color="text-[#1f4a41]" text="Total Coin" bg="bg-[#1f4a41]" />
        <AppCard figure={summary.active} icon={<RiHandCoinLine />} color="text-[#13f444]" text="Total Active" bg="bg-[#13f444]" />
        <AppCard figure={summary.inactive} icon={<GiTrade />} color="text-[#abc444]" text="Total In-active " bg="bg-[#abc444]" />
      </div>
      <div className="space-y-5">
        <div className="flex">
          <div className="flex-grow">
            <div className="max-w-sm">
              <AppInput name="search" onChange={(e) => searchFN(e.target.value)} required label="Search by name" />
            </div>
          </div>
          <div onClick={() => setShowModal(true)} className="bg-black text-white py-3 font-bold px-6 text-sm rounded-md cursor-pointer">Add E-Fund</div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {
            !loading && catego.map((cat, i) => (
              <EFundChip reload={async () => await fetch()} data={cat} key={i} />
            ))
          }

          {
            loading && ["", "", "", "", "", ""].map((data, i) => (
              <div key={i} className="px-4 h-40 py-4 space-y-3 border border-gray-200 rounded-md bg-white">
                <div className="space-y-2">
                  <div className="w-10 h-10 preload"></div>
                  <div className="py-2 preload w-1/3"></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <div className="py-3 preload w-3/4"></div>
                    <div className="w-1/2 preload py-2"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="py-3 preload w-3/4"></div>
                    <div className="w-1/2 preload py-2"></div>
                  </div>
                </div>
              </div>
            ))
          }
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