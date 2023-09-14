import React from 'react'
import planetx from '../assets/planet-04.png'
import Astronaut from '../components/Astronaut'
import rocket from '../assets/rocket.png'
import {motion as m,useInView} from 'framer-motion'
import { useRef } from 'react'
import planet from '../assets/get-started.png'
const PlanetX = () => {
    
  return (
    <section className='h-screen flex items-center flex-col' style={{backgroundImage:`url(${planetx})` , backgroundSize:'cover',backgroundPosition:'center'} } id='Planet-X'>

        <h1 className='my-10 bg-slate-800 p-4 md:text-4xl text-2xl bg-opacity-40 z-10'>Welcome To Planet-X!</h1>

            <div className=' absolute left-0 '><Astronaut/></div>
            
        <m.img src={rocket} className='w-[200px] md:w-[300px] opacity-95 relative top-10 left-40 z-0 ' id='rocket'
       
        initial={{x:-400,y:0}}
        whileInView={{x:1000,y:-100}}
        transition={{type:'spring' , stiffness:2,delay:1}}
        ></m.img>

        <a className=' bg-slate-800 bg-opacity-40 p-12 text-xl relative left-[42%] md:left-[44%] lg:left-[46%]  rounded-b-full  rotate-90 cursor-pointer z-10' href='#Planet-Y'>Next Planet!</a>

        <m.img
        src={planet}
        className='w-[200px] md:w-[300px] relative bottom-[50%] left-[30%] z-0'
        
        
        whileInView={{x:-200}}
        transition={{type:'spring' , stiffness:1,delay:1}}
        viewport={{once:false}}
        
        >

        </m.img>


    </section>
  )
}

export default PlanetX
