import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-center items-center text-base h-[80px]'>
      <ul className='flex justify-between gap-4 max-sm:flex-col max-sm:m-4'>
        <li>
          <Link to='/mentions'>
            Mentions Légales
          </Link>
        </li>
        <li>
          <p>© Copyright 2023 </p>
        </li>
        <li>
          <p>Photos © Vincent Fernandel Production / D.R.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Footer