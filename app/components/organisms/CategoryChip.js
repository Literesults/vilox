"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoEllipsisHorizontalOutline } from "react-icons/io5";

function CategoryChip() {
    const [optionOpen, setOpen] = useState(false)
    return (
        <div className="px-4 py-4 space-y-4 border border-gray-200 rounded-md bg-white">
            <div className="">
                <div className="flex items-start">
                    <div className="flex-grow">
                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    </div>
                    <div className="relative">
                        <div onClick={() => setOpen(true)} className='w-8 h-8 cursor-pointer flex items-center justify-center text-2xl text-gray-500'><IoEllipsisHorizontalOutline /></div>
                        <div onMouseLeave={() => setOpen(false)} className={`absolute ${!optionOpen && "hidden"} bg-white w-44 font-[500] shadow-lg text-sm border border-gray-100 rounded-md top-0 p-1 right-0`}>
                            <Link href="gift_cards/1">
                                <div className='hover:bg-gray-50 py-2 px-3 rounded-md cursor-pointer text-gray-500'>View</div>
                            </Link>
                            <div className='hover:bg-gray-50 py-2 px-3 rounded-md cursor-pointer text-gray-500'>Edit Category Info</div>
                            <div className='hover:bg-gray-50 py-2 px-3 rounded-md cursor-pointer text-danger'>Deactivate</div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl font-bold">Card name</div>
            </div>
            <div className="flex items-center">
                <div className="flex-grow text-sm text-gray-400">Monthly report analytics</div>
                <div className="-space-x-3">
                    <div className="w-8 inline-block h-8 bg-gray-100 rounded-full"></div>
                    <div className="w-8 inline-block h-8 bg-gray-200 rounded-full"></div>
                    <div className="w-8 inline-block h-8 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default CategoryChip