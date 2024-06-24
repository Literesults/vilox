import React from 'react'
import AppLayout from '@component/layouts/appLayout'

function Page({params}) {
  return (
    <AppLayout>
        {params.giftCard}
    </AppLayout>
  )
}

export default Page