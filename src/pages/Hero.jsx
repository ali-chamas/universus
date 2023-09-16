import React from 'react'
import moon from '../assets/moon.png'
import {motion as m} from 'framer-motion'
import Navbar from '../components/Navbar'
import { transition1 } from '../transition'
const Hero = () => {
  return (
  <m.section className='h-[100%]  '
  
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  transition={transition1}
  >

<div className=''><Navbar/></div>
    
    <div className='flex flex-col md:flex-row items-center justify-evenly md:justify-between gap-8 md:gap-0 mt-20 lg:-mt-8  md:px-12'>

      <m.div 
      animate={{opacity:1}}
      initial={{opacity:0}}
      transition={{duration:1.4,delay:1.5}}
      className='flex flex-col justify-center items-center px-10 text-center font-light md:max-w-[600px] md:pl-20 gap-8 md:gap-10 '>
        <div className=' bg-purple-950 absolute w-[600px] h-[300px] rounded-full -z-20 blur-3xl'></div>
        <h1 className='text-3xl font-bold md:text-4xl'>
          What is universus?
        </h1>
        <p className='md:text-xl'>Universus is a website made to explore our three planets planet-x planet-y and planet-z with our astronaut steve!</p>
        
        <a href="planets" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg  text-purple-950 border-2 border-purple-950 bg-purple-500 rounded-full hover:text-white group hover:bg-purple-600 font-bold shadow-md shadow-purple-700">
          <span class="absolute left-0 block w-full h-0 transition-all bg-purple-900 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span class="relative">Explore</span>
          </a>
      </m.div>

      <div className='absolute w-[600px] h-[200px] bg-gradient-to-t from-purple-900 to-purple-950 blur-3xl -z-10 right-[250px]'></div>

      <div className='relative overflow-hidden'>
      <m.img 
     whileInView={{y:[0,15,0,15,0],transition:{duration:6,ease:'linear',repeat:Infinity,delay:2}}} 
     animate={{x:0,rotate:375,transition:{type:'spring',stiffness:15,delay:1}}}
     initial={{x:1000}}
     
      


      src={moon} className='w-[400px] max-h-[500px] md:w-[500px] md:max-h-[600px] md:mr-16 float ' />
      </div>

    </div>
  </m.section>
  )
}

export default Hero
