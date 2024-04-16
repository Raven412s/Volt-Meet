import CallListCard from '@/components/CallListCard'
import React from 'react'

const Previous = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <p className='text-3xl font-bold'>Previous Calls</p>
      <CallListCard type="ended" />
    </section>
  )
}

export default Previous