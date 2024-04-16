import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './mobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
        <Link href='/ ' className='flex items-center gap-1'>
    <Image src='/icons/logo.svg' width={32} height={32} alt="Logo" />
            <p className='text-xl text-white font-bold max-sm:hidden'>Volt Meet</p>
        </Link>
        <div className="flex-between gap-5">
            {/* Clerk - Auth Managment */}
            <SignedIn>
                <UserButton/>
            </SignedIn>
            <MobileNav/>
        </div>
    </nav>
  )
}

export default Navbar