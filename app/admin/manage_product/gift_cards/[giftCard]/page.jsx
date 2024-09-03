"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import EFundChip from '@/app/components/organisms/EFundChip'
import { TbGiftCard } from "react-icons/tb";
import { MdCardGiftcard } from "react-icons/md";
import { RiCoinsLine, RiHandCoinLine } from 'react-icons/ri'
import { GiProfit, GiTrade } from 'react-icons/gi'
import { CiCreditCard2, CiCreditCardOff } from 'react-icons/ci'
import { fetchGiftCard } from '@/app/services/authService'
import axios from 'axios'
import { API_BASE_URL, TOKEN } from '@/app/services/httpService'
import GiftCardChip from '@/app/components/organisms/GiftCardChip'
import { BsCamera } from 'react-icons/bs'
import Image from 'next/image'
import Modal from '@/app/components/organisms/Modal'
import serialize from '@/app/hooks/Serialize'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import ResponseModal from '@/app/components/organisms/ResponseModal'

function Page({ params }) {
  const [catego, setcate] = useState(["", "", "", ""])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState();
  const [showModal, setShowModal] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [errors, setErrors] = useState({})
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)

  const headers = { 'Authorization': TOKEN }
  const router = useRouter()

  const fetch = async () => {
    const { status, data } = await fetchGiftCard({ gift_card_category_id: params.giftCard }).catch(err => console.log(err))
    if (status) {
      setcate(data.data[0]);
    }
    setLoading(false)
  }

  const uploadImg = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }


  const submit = async (e) => {
    e.preventDefault();
    const data = serialize(e.target)
    const formdata = new FormData()
    setProcessing(true)
    formdata.append('image', selectedImage)
    formdata.append('name', data.name)
    formdata.append('speed', data.speed)
    formdata.append('sell_rate_low', data.sell_rate_low)
    formdata.append('sell_rate_high', data.sell_rate_high)
    formdata.append('gift_card_category_id', data.gift_card_category_id)

    await axios.post(`${API_BASE_URL}admin/giftcard/add_gift_card`, formdata, { headers }).then(async (res) => {
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

  useEffect(() => {
    fetch()
  }, [])

  return (
    <AppLayout title={`Details of ${params.giftCard}`}>
      <Modal closeModal={() => { setShowModal(false) }} size={"lg"} isOpen={showModal}>
        <form onSubmit={(e) => { submit(e) }} >
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
              <input name="image" required id="img" onChange={(e) => uploadImg(e)} type="file" className="opacity-0" accept="image/png, image/gif, image/jpeg" />
            </div>
            <input type='hidden' value={params.giftCard} name='gift_card_category_id' />
            <AppInput name="name" required label="Name" />
            <AppInput name="sell_rate_low" required label="Sell rate low " />
            <AppInput name="sell_rate_high" required label="Sell rate high " />
            <AppInput type={"select"} options={["hot", "normal"]} name="speed" required label="Speed" />
            <div className='flex gap-4 items-center'>
              <button disabled={processing} className='bg-black disabled:bg-opacity-30 text-white text-center flex-grow rounded-md py-2'>{processing ? "Saving..." : "Save"}</button>
              <div onClick={() => { setShowModal(false) }} className='hover:bg-gray-50 text-center flex-grow rounded-md py-2 cursor-pointer'>Cancel</div>
            </div>
          </div>
        </form>
      </Modal>

      <div className="space-y-5">
        <div className="flex items-center">
          <div className="flex-grow flex">
            <div onClick={() => router.back() } className="cursor-pointer flex items-center gap-1">
              <IoIosArrowRoundBack /> Back
            </div>
          </div>
          <div onClick={() => setShowModal(true)} className="bg-black text-white py-3 font-bold px-6 text-sm rounded-md cursor-pointer">Add Gift Card</div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {
            !loading && catego.map((cat, i) => (
              <GiftCardChip refresh={() => fetch()} data={cat} key={i} />
            ))
          }

          {
            loading && ["", "", "", "", "", ""].map((data, i) => (
              <div key={i} className="px-4 h-52 py-4 space-y-3 border border-gray-200 rounded-md bg-white">
                <div className="space-y-2">
                  <div className="w-14 h-14 preload"></div>
                  <div className="py-3 preload w-1/3"></div>
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
                <div className="preload rounded-lg w-1/5 py-2"></div>
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

{/* <EFundChip key={i} /> */ }