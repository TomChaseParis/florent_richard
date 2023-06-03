import React from 'react'
import CarousselConcerts from '../caroussel/CarousselConcert'

const Concerts = () => {
  return (
    <div className='bg-black h-[100%] py-7' id='concerts'>
      <h1 className='text-center text-white py-12'>CONCERTS</h1>
      <CarousselConcerts />
      <p className='text-center text-white mt-5'>Prochaines dates à venir</p>
    </div>
  )
}

export default Concerts