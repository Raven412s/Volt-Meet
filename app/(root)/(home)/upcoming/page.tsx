import CallListCard from '@/components/CallListCard'
import React from 'react'

const Upcoming = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <p className='text-3xl font-bold'>upcoming</p>
      <CallListCard type="upcoming" />
    </section>
  )
}

export default Upcoming