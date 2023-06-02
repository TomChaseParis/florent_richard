import React from 'react'
import CarousselConcerts from '../caroussel/CarousselConcert'

const Concerts = () => {
  return (
    <div className='bg-black h-[100%] py-7' id='concerts'>
      <h1 className='text-center text-white py-12'>CONCERTS</h1>
      <CarousselConcerts />
    </div>
  )
}

export default Concerts