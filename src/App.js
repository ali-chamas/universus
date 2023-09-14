
import Home from './pages/Home';

import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import PlanetX from './pages/PlanetX';
import PlanetY from './pages/PlanetY';
import PlanetZ from './pages/PlanetZ';

function App() {
  return (
    <div className='font-mono overflow-x-hidden' >
   <Navbar/>
   <Hero/>
   <Home/>
   <PlanetX/>
   <PlanetY/>
   <PlanetZ/>
    </div>
  );
}

export default App;
