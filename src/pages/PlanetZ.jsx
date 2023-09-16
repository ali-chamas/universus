import React from 'react'
import planetz from '../assets/planet-02.png'
import {motion as m} from 'framer-motion'
import { transition1 } from '../transition'
import rocket2 from '../assets/rocket-2.png'
import rocket3 from '../assets/rocket-3.png'
import Back2 from '../components/Back2'
import Astronaut from '../components/Astronaut'

const PlanetZ = () => {
  return (
    <m.section 
      
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  transition={transition1}
    className='h-screen flex items-center flex-col' style={{backgroundImage:`url(${planetz})` , backgroundSize:'cover',backgroundPosition:'center'} } id='Planet-Z'>

<div className=' absolute left-0 '><Astronaut/></div>

<div className='absolute right-0 p-2 md:p-10 z-50'><Back2/></div>

<h1 className='my-14 bg-slate-800 p-4 md:text-4xl text-2xl bg-opacity-40 z-10'>Welcome To Planet-Y!</h1>


<a className=' bg-slate-800 bg-opacity-40 p-12 text-l relative right-[42%] md:right-[44%] lg:right-[46%]  rounded-t-full  rotate-90 cursor-pointer z-10  text-center top-[14%] ' href='/PlanetY'>previous Planet!</a>


<div className='flex justify-between w-full px-20 relative overflow-hidden'>
<m.img 

whileInView={{y:100}}
initial={{y:0}}
transition={{type:'spring',stiffness:2}}

src={rocket2} className='w-[120px] h-[70%]'></m.img>

<m.img 
whileInView={{y:70}}
initial={{y:0}}
transition={{ease:'ease-in',type:'spring',stiffness:2,delay:1.5}}
src={rocket3} className='w-[120px] h-[70%]'></m.img>
</div>
    </m.section>
  )
}

export default PlanetZ
