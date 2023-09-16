import React from 'react'
import planety from '../assets/planet-07.png'
import {motion as m,useInView} from 'framer-motion'
import Back2 from '../components/Back2'

import Astronaut from '../components/Astronaut'
import Rocks from '../components/Rocks'
import { transition1 } from '../transition'
const PlanetY = () => {
  return (
    <m.section 
      
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  transition={transition1}
  
  className='h-screen flex items-center flex-col' style={{backgroundImage:`url(${planety})` , backgroundSize:'cover',backgroundPosition:'center'} } id='Planet-Y'>
    <div className='absolute right-0 p-10 z-50'><Back2/></div>

      <h1 className='my-10 bg-slate-800 p-4 md:text-4xl text-2xl bg-opacity-40 z-10'>Welcome To Planet-Y!</h1>

<div className=' absolute left-0 '><Astronaut/></div>

<div className='absolute right-0'><Rocks/></div>


<a className=' bg-slate-800 bg-opacity-40 p-12 text-xl relative left-[42%] md:left-[44%] lg:left-[46%]  rounded-b-full  rotate-90 cursor-pointer z-10 top-[15%]' href='/PlanetZ'>Next Planet!</a>
<a className=' bg-slate-800 bg-opacity-40 p-12 text-l relative right-[42%] md:right-[44%] lg:right-[46%]  rounded-t-full  rotate-90 cursor-pointer z-10  text-center bottom-[5%] ' href='/PlanetX'>previous Planet!</a>
    </m.section>
  )
}

export default PlanetY
