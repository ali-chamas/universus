import React, { useState } from 'react'
import {motion as m} from 'framer-motion'
import astronaut from '../assets/astronaut.png'
const Astronaut = () => {

    const [drag,setDrag]=useState(true)

  return (
    <div>
      <m.img src={astronaut} className='w-[70px] h-[120px] md:w-[100px] md:h-[200px]  cursor-grab z-50 relative'
      onClick={()=>setDrag(false)}
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right:window.innerWidth-100,
        bottom: window.innerHeight-300
      }}
      whileHover={{scale:1.05}}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
      animate={{x:0,rotate:0}}
      initial={{x:-1000,rotate:360}}
      transition={{type:'spring',stiffness:10,delay:2}}
    
      >
        

      </m.img>
{drag && <p>Drag me!</p>}
      
    </div>
  )
}

export default Astronaut
