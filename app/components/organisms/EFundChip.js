"use client"
import React, { useState } from 'react'
import { LiaEye } from 'react-icons/lia';

function EFundChip() {
    return (
        <div className="px-4 py-4 space-y-4 border border-gray-200 rounded-md bg-white">
            <div className="">
                <div className="flex items-start">
                    <div className="flex-grow">
                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    </div>
                    <div>
                        <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer'><LiaEye /></div>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-bold">SYM</div>
                    <div className='text-xs text-gray-500'>E-Fund Name (NetWork)</div>
                </div>
            </div>
            <div className="">
                <div className=''>
                    <div className='font-bold'>Current Price:</div>
                    <div className='text-gray-500'>&#8358;12,464</div>
                </div>
            </div>
        </div>
    )
}

export default EFundChip