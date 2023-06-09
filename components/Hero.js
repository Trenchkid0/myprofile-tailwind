import React, { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircel,AiFillLinkedin } from 'react-icons/ai'
import Image from 'next/image'
import devd from '../public/dev-ed-wave.png'

export default function Hero() {

  return (
    <section class= " min-h-screen " >
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden'>
            <Image src={devd} layout='fill' objectFit='cover' alt='foto'/>
        </div>
        <div className='text-center p-10 dark:text-white '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-white'>Caesario Arya</h2>
            <h3 className='text-2xl py-2 dark:text-white'>Front End Developer</h3>
            <p  className='text-md py-5 leading-8 text-gray-800 dark:text-white'>Passionate Front-End Developer with an eye for captivating designs and seamless interactions </p>
        </div>
        
       
    </section>
  )
}
