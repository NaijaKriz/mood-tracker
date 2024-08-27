import { Fugaz_One } from 'next/font/google';
import React from 'react'
import Button from './Button';


const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center
    items-center gap-4'>
      <h3 className={' text-4xl sm:text-5xl md:text-6xl ' + fugaz.className}>
        Login Or Register
        </h3>
        <p>You&#39;re one step away</p>
        <input className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-800 focus:border-indigo-600 py-2 sm:py-3 
        border border-solid border-indigo-400 rounded-full outline-none' placeholder="Email"/>
        <input className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-800 focus:border-indigo-600 py-2 sm:py-3 
        border border-solid border-indigo-400 rounded-full outline-none' placeholder="Password" type="password"/>
        <div className="max-w-[400px] w-full mx-auto">
        <Button text="Submit" dark full/>
        </div>
        <p>Don&#39;t have an account? <span className="text-indigo-600">Sign up</span></p>
    </div>
  )
}

export default Login