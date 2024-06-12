import React from 'react'
import { HiOutlineLightningBolt } from "react-icons/hi";

function AppCard({color,bg,text}) {
    return (
        <div className='bg-white px-5 space-y-1 py-6 rounded-lg'>
            <div>
                <div className={`h-8 w-8 ${bg} flex items-center justify-center ${color} bg-opacity-5 rounded-lg`}>
                    <HiOutlineLightningBolt />
            </div>
                <div></div>
            </div>
            <div className='text-gray-400 text-xs'>{text}</div>
            <div className='text-3xl font-bold'>39</div>
        </div>
    )
}

export default AppCard