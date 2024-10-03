"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import CategoryChip from '@/app/components/organisms/CategoryChip'
import { CiCreditCard1, CiCreditCardOff } from "react-icons/ci";
import { PiCardsThree } from "react-icons/pi";
import { LiaCreditCardSolid } from "react-icons/lia";
import { addGiftCardCategory, cryptoSummary, fetchGiftCardCategory, giftcardOrderSummary, giftcardSummary } from '@/app/services/authService'
import useFormHandlerFormdata from '@/app/hooks/useFormHandlerFormdata'
import Modal from '@/app/components/organisms/Modal'
import Image from 'next/image'
import { uploadfile } from '@/app/hooks/imageUpload'
import { BsCamera } from 'react-icons/bs'
import axios from 'axios'
import { API_BASE_URL, TOKEN } from '@/app/services/httpService'
import serialize from '@/app/hooks/Serialize'
import ResponseModal from '@/app/components/organisms/ResponseModal'
import { debounce } from '@/app/hooks/useDebounce'

function Page() {
  const [catego, setcate] = useState(["", "", "", ""])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState();
  const [selectedUpdateImage, setSelectedUpdateImage] = useState();
  const [showModal, setShowModal] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [updateItem, setUpdateItem] = useState({})
  const [errors, setErrors] = useState({})
  const [changed, setChanged] = useState(false)
  const [summary, setSummary] = useState([])
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)

  const headers = { 'Authorization': TOKEN }

  const fetch = async () => {
    const { status, data } = await fetchGiftCardCategory().catch(err => console.log(err))
    if (status) {
      setcate(data.data[0]);
    }
    fetchSummary()
    setLoading(false)
  }

  

  const searchFN = debounce(async (e) => {
    const { status, data } = await fetchGiftCardCategory({ search: e }).catch(err => console.log(err))
    if (status) {
      setcate(data.data[0]);
    }
  }, 3000);


  const updateFn = async (e) => {
    e.preventDefault();
    const data = serialize(e.target)
    const formdata = new FormData()
    setProcessing(true)
    if (changed) {
      formdata.append('image', selectedUpdateImage)
    }
    formdata.append('name', data.name)
    formdata.append('id', updateItem.id)
    formdata.append('status', updateItem.status)
    await axios.post(`${API_BASE_URL}admin/giftcard/update_giftcard_category`, formdata, { headers }).then(async (res) => {
      await fetch()
      setAlert(true)
      setAlertData(res.data)
      setUpdateItem({})
      setChanged(false)
      selectedUpdateImage()
    }).catch((error) => {
      error.response && setErrors(error.response.data.data);
      setAlert(true)
      error.response && setAlertData(error?.response?.data)
    })
    setProcessing(false)
  }

  const uploadImg = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }


  const uploadUpdateImg = async (e) => {
    setChanged(true)
    if (e.target.files && e.target.files.length > 0) {
      setSelectedUpdateImage(e.target.files[0]);
    }
  }


  const submit = async (e) => {
    e.preventDefault();
    const data = serialize(e.target)
    const formdata = new FormData()
    setProcessing(true)
    formdata.append('image', selectedImage)
    formdata.append('name', data.name)
    await axios.post(`${API_BASE_URL}admin/giftcard/add_giftcard_category`, formdata, { headers }).then(async (res) => {
      await fetch()
      setSelectedImage()
      setShowModal(false)
      setAlert(true)
      setAlertData(res.data)
    }).catch((error) => {
      error.response && setErrors(error.response.data.data);
      setAlert(true)
      setAlertData(error?.response?.data)
    })
    setProcessing(false)
  }


  const fetchSummary = async () => {
    const { status, data } = await giftcardSummary().catch(err => console.log(err))
    if (status) {
      setSummary(data.data);
    }
  }

  useEffect(() => {
    fetchSummary()
    fetch()
  }, [])




  return (
    <AppLayout title="Summary of Gift card Products">
      <Modal closeModal={() => { setShowModal(false) }} size={"lg"} isOpen={showModal}>
        <form onSubmit={(e) => { submit(e) }} enctype="multipart/form-data">
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
            <div className='flex gap-4 items-center'>
              <button disabled={processing} className='bg-black disabled:bg-opacity-30 text-white text-center flex-grow rounded-md py-2'>{processing ? "Confirming..." : "Confirm"}</button>
              <div onClick={() => { setShowModal(false) }} className='hover:bg-gray-50 text-center flex-grow rounded-md py-2 cursor-pointer'>Cancel</div>
            </div>
          </div>
        </form>
      </Modal>

      <Modal closeModal={() => { setUpdateItem({}); setChanged(false) }} size={"lg"} isOpen={Object.keys(updateItem).length > 0}>
        <form onSubmit={(e) => { updateFn(e) }} enctype="multipart/form-data">
          <div className='space-y-5'>
            <div className="h-24 w-24 rounded-full bg-gray-200 relative">
              {selectedUpdateImage && (
                <Image
                  src={changed ? URL.createObjectURL(selectedUpdateImage) : selectedUpdateImage}
                  alt="Thumb"
                  className="w-full h-full rounded-full"
                  width={'150'}
                  height={'150'}
                />
              )}
              <div onClick={() => document.querySelector('#imgTwo').click()} className="absolute flex items-center justify-center w-8 h-8 bg-black border-2 border-white rounded-full bottom-0 right-0 cursor-pointer text-white">
                <BsCamera />
              </div>
              <input name="image" id="imgTwo" onChange={(e) => uploadUpdateImg(e)} type="file" className="opacity-0" accept="image/png, image/gif, image/jpeg" />
            </div>

            <AppInput name="name" defaultValue={updateItem.name} required label="Name" />
            <div className='flex gap-4 items-center'>
              <button disabled={processing} className='bg-black disabled:bg-opacity-30 text-white text-center flex-grow rounded-md py-2'>{processing ? "Updating..." : "Update"}</button>
              <div onClick={() => { setUpdateItem({}); setChanged(false) }} className='hover:bg-gray-50 text-center flex-grow rounded-md py-2 cursor-pointer'>Cancel</div>
            </div>
          </div>
        </form>
      </Modal>


      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AppCard figure={catego.length} icon={<PiCardsThree />} color="text-[#777fff]" text="Gift Card Categories" bg="bg-[#777fff]" />
        <AppCard figure={summary?.total} icon={<LiaCreditCardSolid />} color="text-[#900235]" text="Total Gift Cards" bg="bg-[#900235]" />
        <AppCard figure={summary?.active} icon={<CiCreditCard1 />} color="text-[#11c9a4]" text="Active Gift Cards" bg="bg-[#11c9a4]" />
        <AppCard figure={summary?.inactive} icon={<CiCreditCardOff />} color="text-[#ef4444]" text="Inactive Gift Cards" bg="bg-[#ef4444]" />
      </div>
      <div className="space-y-5">
        <div className="flex">
          <div className="flex-grow">
            <div className="max-w-sm">
              <AppInput name="search" onChange={(e) => searchFN(e.target.value)} required label="Search by name" />
            </div>
          </div>
          <div onClick={() => setShowModal(true)} className="bg-black text-white py-3 font-bold px-6 text-sm rounded-md cursor-pointer">Add Category</div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {
            !loading && catego.map((cat, i) => (
              <CategoryChip setUpdateItem={e => { setUpdateItem(e); setSelectedUpdateImage(e.image) }} reload={() => fetch()} data={cat} key={i} />
            ))
          }

          {
            loading && ["", "", "", "", "", ""].map((data, i) => (
              <div key={i} className="px-4 h-44 py-4 space-y-4 border border-gray-200 rounded-md bg-white">
                <div className="space-y-2">
                  <div className="w-14 h-14 preload"></div>
                  <div className="py-3 preload w-1/3"></div>
                  <div className="py-2 w-1/6 preload rounded-lg"></div>
                </div>
                <div className="preload w-1/2 py-2"></div>
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