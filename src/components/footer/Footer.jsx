import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center text-base h-[80px]'>
       <ul className='flex justify-between gap-4 max-sm:flex-col max-sm:m-4'>
        <li>
          <a href="mentions">Mentions légales</a>
        </li>
        <li>
          <p>© Copyright 2023 </p>
        </li>
       </ul>
    </div>
  )
}

export default Footer