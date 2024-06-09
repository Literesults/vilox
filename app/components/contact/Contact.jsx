import React from 'react'
import Image from 'next/image'
import PhoneImg from '../../assets/contactPhone.png'

 const Contact = () => {
  return (
    <div className='container my-14 py-24' id='contact'>
        <h2 className='text-3xl font-bold text-center text-headText' 
        >Contact Us</h2>
        <p className='text-1xl leading-4 font-normal py-3 text-center text-paraText'
      
        >Got any issues? Drop a message below.</p>

        <div className="lg:grid p-4 lg:p-12 grid-cols-2 lg:flex items-center justify-center gap-[30px]" >
            <div className="gridContent">
                <Image src={PhoneImg}  />
            </div>
            <div className="gridContent">
                <form className=''>
                <div class="mb-4">
                <label for="name" class="block text-gray-700 font-medium mb-2">Full Name</label>
                <input type="text" placeholder='Enter Full Name' class="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    background: '#CBCBCB'
                }}
                required />
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" placeholder='Enter Email Address'  class="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    background: '#CBCBCB'
                }}
                required />
            </div>
            <div class="mb-4">
                <label for="bio" class="block text-gray-700 font-medium mb-2">Message</label>
                <textarea id="bio" placeholder='Drop a message' name="bio" rows="4" class="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                    background: '#CBCBCB'
                }}
                ></textarea>
            </div>

                </form>
            </div>
        </div>
    </div>
  )
}
export default Contact