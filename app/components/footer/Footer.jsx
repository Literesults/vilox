import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/viloxLogo.png'

 const Footer = () => {
  return (
    <div className="lg:px-16 p-6">
        <h2 className='font-bold text-center lg:text-5xl text-3xl'
        style={
            {
                color: '#0F0F0F'
            }
        }
        >Your go - to app for swift <br className="hidden lg:block" /> and easy transactions</h2>
        <p
        className='font-normal my-4 text-center leading-6 py-5'
        style={
            {
                color: '#373737'
            }
        }
        >Sell all giftcards and cryptocurrencies on vilox <br className="hidden lg:block" /> and get your funds in minutes.</p>

        <div className="my-10 lg:flex items-center justify-between lg:px-16 py-10 text-center" 
        style={{
            backgroundColor: 'rgba(30, 30, 30, 0.1)'
        }}
        >
            <div className="icons">
                <a href="#">Icon</a>
                <a href="#">Icon</a>
                <a href="#">Icon</a>
                <a href="#">Icon</a>
            </div>
            <div className="footerImg text-center flex justify-center my-4">
                <a href="#">
                    <Image src={Logo} />
                </a>
            </div>
        </div>

            <div className="my-2 lg:flex items-center justify-between pb-6 text-center" 
        >
            <div className="icons">
                <a href="#">Terms of Service</a>
                <a href="#" className='mx-4'>Privacy Policy</a>
                <a href="#">FAQs</a>
            </div>
            <div className="footerImg">
                <a href="#">@2024 Vilox. All rights reserved</a>
            </div>
        </div>
    </div>
  )
}


export default Footer