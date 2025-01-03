'use client'

import { useContext } from 'react'
import { Progress } from '@/components/ui/progress'
import { CoinsIcon, Grid2X2, UserCircle } from 'lucide-react'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import { UserDetailsContext } from '@/app/_context/UserDetailsContext'
import Link from 'next/link'
import CreateButton from './CreateButton'

const Sidebar = () => {

  const menuOptions = [
    {
      name: 'Dashboard',
      icon: Grid2X2,
      path: '/dashboard'
    },
    {
      name: 'Buy Credits',
      icon: CoinsIcon,
      path: '/buy-credits'
    },
    {
      name: 'Profile',
      icon: UserCircle,
      path: '/dashboard/profile'
    }
  ]

  const path = usePathname()

  const { userDetails, setUserDetails } = useContext(UserDetailsContext)

  return (
    <div className='w-64 fixed h-screen shadow-md p-5'>

      <div className='flex gap-2 items-center'>
        <Image src={logo} alt='logo' width={35} height={35} />
        <h2 className='font-medium text-lg'>AI Video Generator</h2>
      </div>

      <div className='mt-10'>
        <CreateButton />

        <ul className=''>
          {menuOptions.map((option, index) => (
            <li key={index}>
              <Link href={option.path} className={`flex gap-2 items-center p-3 mt-2 rounded-lg text-gray-500 hover:bg-slate-200 hover:text-black transition-all duration-300 cursor-pointer ${path === option.path ? 'bg-primary text-white' : ''}`}>
                <option.icon />
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='p-3 border rounded-lg text-sm absolute bottom-10 w-[85%] flex flex-col gap-2'>
        <h2 className='font-bold'>Total Usage</h2>
        <Progress value={userDetails?.credits * 10} />

        <h2 className='text-xs text-gray-500'>{10 - userDetails?.credits} Min Used out of 10 Min</h2>
      </div>

    </div>
  )
}

export default Sidebar
