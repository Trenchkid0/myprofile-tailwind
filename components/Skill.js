import React from 'react'
import javascrpit from '../public/icons8-javascript-144.png'
import html from '../public/html.png'
import css from '../public/css.png'
import react from '../public/react.png'
import tailwind from '../public/tailwind.png'

import Image from 'next/image'

export default function Skill() {
  return (
    <section>
        <div className='dark:text-white'> 
            <h3 className='text-3xl py-1'>My Skill</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
                Since the beggining of my journey as front end developer. This my skill
            </p>
        </div>
        <div className='desktop:flex desktop:flex-wrap ' >
           <div className='text-center shadow-3xl p-10 rounded-xl my-10 desktop:w-40  desktop:mx-8 dark:bg-white    '>
                <Image src={javascrpit} width={100} height={100}alt='foto'/>
                <p className='text-lg font-medium pt-4 pb-2 sm:text-lg'>Javascript</p>
           </div>
           <div className='text-center shadow-3xl p-10 rounded-xl my-12 desktop:w-40  desktop:mx-8 dark:bg-white  '>
                <Image src={html} width={100} height={100}alt='foto'/>
                <h3 className='text-lg font-medium pt-4 pb-2'>HTML</h3>
           </div>
           <div className='text-center shadow-3xl p-10 rounded-xl my-12 desktop:w-40  desktop:mx-8 dark:bg-white '>
                <Image src={css} width={100} height={100}alt='foto'/>
                <h3 className='text-lg font-medium pt-4 pb-2'>CSS</h3>
           </div>
           <div className='text-center shadow-3xl p-10 rounded-xl my-12 desktop:w-40  desktop:mx-8 dark:bg-white '>
                <Image src={react} width={100} height={100}alt='foto'/>
                <h3 className='text-lg font-medium pt-4 pb-2'>React</h3>
           </div>
           <div className='text-center shadow-3xl p-10 rounded-xl my-12 ml-8 dark:bg-white sm:w-[27rem] sm:-ml-1 '>
                <Image src={tailwind} width={80} height={80} alt='foto'/>
                <h3 className='text-lg font-medium pt-4 pb-2'>Tailwind</h3>
           </div>
        </div>
    </section>
  )
}
