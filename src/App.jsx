import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import { BrowserRouter } from 'react-router-dom'

import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const App = () => {

  return (
    <BrowserRouter>

      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas
          camera={{ position: [0, 0, 1] }}
          dpr={Math.min(window.devicePixelRatio, 2)}
          gl={{ antialias: false }}
        >
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

    </BrowserRouter>
  )
}


export default App

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(1000), { radius: 1.5 }))

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  useFrame((state, delta) => {
    if (!isMobile) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
