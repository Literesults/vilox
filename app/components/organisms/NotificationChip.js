import React from 'react'

function NotificationChip({ data }) {
  return (
    <div className="relative">
      <div className="flex gap-2 py-3">
        <div className="">
          <div className="w-7 h-7 bg-gray-200 overflow-hidden rounded-full">
            
          </div>
        </div>
        <div className="space-y-1">
          <div className="font-semibold text-sm dark:text-white-1">Notification Title</div>
          <div className={`trunck-text font-normal text-xs pr-3`}>
            Lorem fadf jnc niadnv inoax noinac iondci noicn oinoci noiadnco nodc noadic noiadnc oin isnc infainicn oiandco inoinadoc inoinc oinosic noiscn ionscoi noinSC INOic noinSOC NJADFNJBjnoan nokn osnv kn osdi noi noinso in
          </div>
        </div>
      </div>
      <div className="bottom-0 max-w-5xl mx-auto px-2">
        <div className="bg-gray-100 dark:bg-gray-600 pt-[1px]"></div>
      </div>
    </div>
  )
}

export default NotificationChip