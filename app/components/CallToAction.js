'use client'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { useAuth } from '@/context/AuthContext';

function CallToAction() {
    const {currentUser} = useAuth()
    if(currentUser) {
       return(
        <div className="max-w-[600px] mx-auto w-full">
        <Link href="./dashboard">
            <Button full text='Go to your dashoard' dark/>
        </Link>
    </div>
       )
    }
  return (
    <div className='grid grid-cols-2 gap-4 w-fit mx-auto'>
                <Link href="./dashboard">
                <Button text='Sign up' />
                </Link>
                <Link href="./dashboard">
                <Button text='Login' dark/>
                </Link>
                
    </div>
  )
}

export default CallToAction
