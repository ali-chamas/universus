import React from 'react'

import {motion as m} from 'framer-motion'
const Navbar = () => {
  return (
    <m.div 
    animate={{opacity:1}}
    initial={{opacity:0}}
    transition={{duration:1.4,delay:2}}

    className='font flex justify-between gap-10 items-center p-8 overflow-hidden md:px-32'>
       
        <div className=' bg-gradient-to-t from-purple-950 to-purple-900 absolute  h-8 w-full rounded-3xl blur-2xl  -z-10 '></div>
        <div>
            <h1 className=' text-3xl md:text-4xl font-bold  '>
                UNIVERSUS
            </h1>
        </div>

        
      
        <div className=''>
            <a href="" className='text-xs md:text-xl opacity-80 hover:opacity-100'>Contact me</a>

        </div>
    </m.div>
  )
}

export default Navbar
