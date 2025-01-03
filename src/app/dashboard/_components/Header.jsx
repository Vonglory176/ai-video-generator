import { UserButton } from '@clerk/nextjs'
import React from 'react'
// import Image from 'next/image'
// import logo from '@/assets/logo.png'


const Header = () => {
  return (
    <div className='flex p-5 shadow-md justify-end'>
      {/* <Image src={logo} alt='logo' width={35} height={35} /> */}

      <UserButton />
    </div>
  )
}

export default Header
