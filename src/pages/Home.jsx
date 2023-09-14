import React, { useState } from 'react'

import Planet1 from '../assets/planet1.png'
import Planet2 from '../assets/planet-2.png'
import Planet3 from '../assets/planet-3.png'
import space1 from '../assets/space-1.jpg'

import {motion as m} from 'framer-motion'



const Home = () => {

  const [title,setTitle]=useState(false)
  const [id,setId]=useState(0)

  const planets=[
    {id:1,title:'Planet-X',img:Planet1},
    {id:2,title:'Planet-Y',img:Planet2},
    {id:3,title:'Planet-Z',img:Planet3},
  ]

  return (
    <section  className=' flex flex-col items-center' id='planets'>




<div style={{backgroundImage:`url(${space1})`,backgroundSize:'cover'}} className='absolute md:h-full h-[210vh]  w-screen -z-10'></div>
<m.h1 

initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1.4,delay:1}}
viewport={{once:false}}
className='text-2xl md:text-3xl font-bold mt-20 mb-10 '>Choose a planet to visit</m.h1>
      <m.div

      
      
      className=' flex flex-col h-full md:flex-row justify-evenly  items-center relative overflow-hidden  gap-40 md:gap-20 p-10 md:py-20'>

            
            
           
            
            {planets.map((planet,i)=>(
                <m.a
                href={`#${planet.title}`}
                whileHover={{scale:1.1,transition:{duration:0.1}}}
                animate={{rotate:360,transition:{duration:20,ease:'linear',repeat:Infinity}}}
                whileInView={{opacity:1,transition:{duration:0.5,delay:i*0.6}}}
                initial={{opacity:0}}
                onMouseOver={()=>{
                  
                  setTitle(true)
                   setId(planet.id)
                }}
                onMouseOut={()=>{
                  setTitle(false) 
                  setId(0)}}
                 className={` max-w-[600px] max-h-[400px] px-10 cursor-pointer ${planet.id===2 ? 'w-[400px]':'w-[300px]'} py-4 md:py-10`}
                 key={planet.id}
                 >
                 
                   
                   <img src={planet.img} className='flex items-center justify-center' alt="" ></img>
                   {title && id==planet.id && <p className='absolute font-bold text-md md:text-xl hidden md:block'>{planet.title}</p>}
                   <p className='absolute font-bold text-md md:text-xl md:hidden'>{planet.title}</p>
                 </m.a>
            ))}

        
        
      </m.div>
      
    </section>
  )
}

export default Home
