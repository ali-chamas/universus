import React from 'react'
import Sidebar from './Sidebar'
import {BsSearch} from 'react-icons/bs'
import {motion as m} from 'framer-motion'
const Navbar = () => {
  return (
    <m.div 
    animate={{opacity:1}}
    initial={{opacity:0}}
    transition={{duration:1.4,delay:2}}

    className='font flex justify-evenly gap-10 items-center p-8 overflow-hidden'>
        <div className='text-3xl  font-bold '>
        <BsSearch/>
        </div>
        <div className=' bg-gradient-to-t from-purple-950 to-purple-900 absolute  h-8 w-full rounded-3xl blur-2xl  -z-10'></div>
        <div>
            <h1 className='text-3xl md:text-4xl font-bold md:ml-72 '>
                UNIVERSUS
            </h1>
        </div>

        <Sidebar/>
      
        <div className='hidden md:flex gap-10 items-center '>
            <a href="" className='opacity-80 hover:opacity-100'>Home</a>
            <a href="" className='opacity-80 hover:opacity-100'>Contact</a>
            <a href="" className='opacity-80 hover:opacity-100'>About</a>

        </div>
    </m.div>
  )
}

export default Navbar
