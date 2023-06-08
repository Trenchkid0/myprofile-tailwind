import React, { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircel,AiFillLinkedin } from 'react-icons/ai'
import Image from 'next/image'
import devd from '../public/dev-ed-wave.png'

export default function Hero() {
    const [dark,setDarkMode] = useState(false)
  return (
    <section class= " min-h-screen" >
        
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>DevbyYo</h1>
            <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={()=>setDarkMode(!dark)} className='cursor-pointer text-xl'/> </li>
                <li ><a href='#' className='bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a> </li>
            </ul>
        </nav>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden'>
            <Image src={devd} layout='fill' objectFit='cover' alt='foto'/>
        </div>
        <div className='text-center p-10 '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Caesario Arya</h2>
            <h3 className='text-2xl py-2'>Front End Developer</h3>
            <p  className='text-md py-5 leading-8 text-gray-800'>Passionate Front-End Developer with an eye for captivating designs and seamless interactions </p>
        </div>
        
       
    </section>
  )
}
