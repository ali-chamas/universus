import React from 'react'
import Home from '../pages/Home';


import Hero from '../pages/Hero';
import PlanetX from '../pages/PlanetX';
import PlanetY from '../pages/PlanetY';
import PlanetZ from '../pages/PlanetZ';
import { AnimatePresence } from 'framer-motion'


import {Routes,Route,useLocation} from 'react-router-dom'
const AnimRoutes = () => {
    const location =useLocation()
  return (

    <AnimatePresence initial={true} mode='wait'>
    <Routes key={location.pathname} location={location}>
      
      
    <Route path='/' element={<Hero/>}/>
    <Route path='/planets' element={<Home/>}/>
    <Route path='/PlanetX' element={<PlanetX/>}/>
    <Route path='/PlanetY' element={<PlanetY/>}/>
    <Route path='/PlanetZ' element={<PlanetZ/>}/>

  </Routes>
  </AnimatePresence>
  )
}

export default AnimRoutes
