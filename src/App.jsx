import { Suspense, lazy } from 'react';

const About = lazy(() => import('./sections/About'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));
const Hero = lazy(() => import('./sections/Hero'));
const Navbar = lazy(() => import('./sections/Navbar'));
import { BrowserRouter } from 'react-router-dom'

import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const App = () => {
  return (
    <BrowserRouter>

    <Suspense fallback={<div>Loading...</div>}>

      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }} pixelRation={window.devicePixelRatio/100} gl={{ antialias: false}}>
          <Stars />
        </Canvas>
      </div>

      <div className="relative z-20">
        <Navbar />
        <Hero />
      </div>

      
      <div className="relative max-w-7xl mx-auto z-10">
        <About />
        <Contact />
        <Footer />
      </div>

    </Suspense>

    </BrowserRouter>
  )
}


export default App

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(1000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
