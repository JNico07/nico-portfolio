import { useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const DemoProject = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/phone.glb')

  const imgTexture = useVideoTexture(props.texture ? props.texture : '/textures/project/GazeGuard.mp4', {
    encoding: THREE.sRGBEncoding, // Ensure correct color space
  })

  useGSAP( () => {
    gsap.from(group.current.rotation, {
        y: Math.PI / 2,
        duration: 1,
        ease: 'power3.out'
    })
  }, [imgTexture])

  // Adjust the texture's scale and position
  imgTexture.repeat.set(3.2, 1.9) // Set repeat values (e.g., 1x1 means no tiling)
  imgTexture.offset.set(-1.32, -0.16) // Set the offset to center the texture
  imgTexture.wrapS = imgTexture.wrapT = THREE.ClampToEdgeWrapping // Ensures no repetition outside bounds
  imgTexture.needsUpdate = true

  return (
    <group ref={group} {...props} dispose={null} position={[0, 1.5, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HomeButton_PhoneButtons_m_0.geometry}
        material={materials.PhoneButtons_m}
        position={[0, -1.322, -0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PhoneBody_PhoneBody_m_0.geometry}
        material={materials.PhoneBody_m}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PhoneBody_PhoneScreen_M_0.geometry}
        material={materials.PhoneScreen_M}
      >
        {/* Use the adjusted image texture */}
        <meshBasicMaterial map={imgTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PowerButton_PhoneButtons_m_0.geometry}
        material={materials.PhoneButtons_m}
        position={[-0.723, 1.487, 0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VolumeButton_PhoneButtons_m_0.geometry}
        material={materials.PhoneButtons_m}
        position={[0.749, 1.145, 0.008]}
        rotation={[0, 0, -Math.PI / 2]}
      />
    </group>
  )
}

useGLTF.preload('/models/phone2.glb')

export default DemoProject
