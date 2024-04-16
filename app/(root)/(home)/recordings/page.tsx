import CallListCard from '@/components/CallListCard'
import React from 'react'

const Recordings = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
    <p className='text-3xl font-bold'>Recordings</p>
    <CallListCard type="recordings" />
  </section>
  )
}

export default Recordings