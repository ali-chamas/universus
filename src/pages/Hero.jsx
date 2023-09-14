import React from 'react'
import moon from '../assets/moon.png'
import {motion as m} from 'framer-motion'
const Hero = () => {
  return (
  <section className='h-full '>
    <div className='flex flex-col md:flex-row items-center justify-evenly md:justify-between gap-8 md:gap-0 mt-20 md:mt-0  md:px-12'>

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
        <a href='#planets' className='p-3 rounded-3xl bg-purple-600 px-6 hover:opacity-80'>
          Explore!
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
  </section>
  )
}

export default Hero
