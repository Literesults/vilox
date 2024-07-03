"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '@component/layouts/appLayout'
import AppCard from '@/app/components/organisms/AppCard'
import AppInput from '@/app/components/organisms/AppInput'
import CategoryChip from '@/app/components/organisms/CategoryChip'
import { CiCreditCard1, CiCreditCardOff } from "react-icons/ci";
import { PiCardsThree } from "react-icons/pi";
import { LiaCreditCardSolid } from "react-icons/lia";
import { addGiftCardCategory, fetchGiftCardCategory } from '@/app/services/authService'
import useFormHandlerFormdata from '@/app/hooks/useFormHandlerFormdata'
import Modal from '@/app/components/organisms/Modal'
import Image from 'next/image'
import { uploadfile } from '@/app/hooks/imageUpload'

function Page() {
  const [catego, setcate] = useState(["", "", "", ""])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)



  const fetch = async () => {
    const { status, data } = await fetchGiftCardCategory().catch(err => console.log(err))
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

  const addCate = useFormHandlerFormdata({
    required: {
      // image: "",
      // name: ""
    },
    initialValues: {
      image: "",
      name: ""
    },
    onSubmit: async (value) => {
      console.log(value);
      const { status, data } = await addGiftCardCategory(value).catch(err => console.log(err))
    }
  })

  return (
    <AppLayout title="Summary of Gift card Products">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AppCard figure={23} icon={<PiCardsThree />} color="text-[#777fff]" text="Gift Card Categories" bg="bg-[#777fff]" />
        <AppCard figure={1603} icon={<LiaCreditCardSolid />} color="text-[#900235]" text="Total Gift Cards" bg="bg-[#900235]" />
        <AppCard figure={1573} icon={<CiCreditCard1 />} color="text-[#11c9a4]" text="Active Gift Cards" bg="bg-[#11c9a4]" />
        <AppCard figure={37} icon={<CiCreditCardOff />} color="text-[#ef4444]" text="Inactive Gift Cards" bg="bg-[#ef4444]" />
      </div>
      <div className="space-y-5">
        <div className="flex">
          <div className="flex-grow">
            <div className="max-w-sm">
              <AppInput name="search" required label="Search Category" />
            </div>
          </div>
          <div onClick={() => setShowModal(true)} className="bg-black text-white py-3 font-bold px-6 text-sm rounded-md cursor-pointer">Add Category</div>
        </div>
        <Modal closeModal={() => { setShowModal(false) }} size={"lg"} isOpen={showModal}>
          <form onSubmit={(e) => { e.preventDefault(); addCate.submit() }} enctype="multipart/form-data">
            <div className='space-y-5'>
              <div>
                <div className="w-20 h-20 rounded-full bg-gray-100 relative">
                  <Image id="output" className="w-full h-full rounded-full" />
                  <label htmlFor="image" className="absolute w-8 h-8 border-2 border-white bottom-1 right-0 bg-black text-white rounded-full flex items-center justify-center">
                    <input accept="image/*" required id="image" onChange={(e) => { uploadImg(e); addCate.value.image = e.target.value }} name="image" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                    <i className="ri-camera-line"></i>
                  </label>
                </div>
              </div>

              <AppInput onChange={(e) => addCate.value.name = e.target.value} name="name" required label="Name" />
              <div className='flex gap-4 items-center'>
                <button disabled={addCate.proccessing} className='bg-black disabled:bg-opacity-30 text-white text-center flex-grow rounded-md py-2'>{addCate.proccessing ? "Saving" : "Save"}</button>
                <div onClick={() => { setShowModal(false) }} className='hover:bg-gray-50 text-center flex-grow rounded-md py-2 cursor-pointer'>Cancel</div>
              </div>
            </div>
          </form>
        </Modal>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {
            !loading && catego.map((cat, i) => (
              <CategoryChip reload={() => fetch()} data={cat} key={i} />
            ))
          }
        </div>
      </div>
    </AppLayout>
  )
}

export default Page