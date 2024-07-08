"use client"
import React, { useState } from 'react'
import { LiaEye } from 'react-icons/lia';

function EFundChip({data}) {
    const sell_rate_high = Number(data.sell_rate_high)
    const sell_rate_low = Number(data.sell_rate_low)

    return (
        <div className="px-4 py-4 space-y-4 border border-gray-200 rounded-md bg-white">
            <div className="">
                <div className="flex items-start">
                    <div className="flex-grow">
                        <div className="w-12 h-12 rounded-full"><img src={data.icon} width={100} height={100} /></div>
                    </div>
                    <div>
                        <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer'><LiaEye /></div>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-bold">{data.name}</div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className=''>
                    <div className='font-bold'>Sell rate high:</div>
                    <div className='text-gray-500'>&#8358;{sell_rate_low.toLocaleString('en-US')}</div>
                </div>
                <div className=''>
                    <div className='font-bold'>Sell rate high:</div>
                    <div className='text-gray-500'>&#8358;{sell_rate_high.toLocaleString('en-US')}</div>
                </div>
            </div>
        </div>
    )
}

export default EFundChip