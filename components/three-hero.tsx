"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial, Sphere, Box, Torus } from "@react-three/drei"
import type * as THREE from "three"

// Floating particles background
function Particles() {
  const ref = useRef<THREE.Points>(null!)
  const { size } = useThree()

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05
      ref.current.rotation.y = state.clock.elapsedTime * 0.075
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#2563eb" size={0.02} sizeAttenuation={true} depthWrite={false} />
    </Points>
  )
}

// Floating geometric shapes
function FloatingShapes() {
  const meshRef1 = useRef<THREE.Mesh>(null!)
  const meshRef2 = useRef<THREE.Mesh>(null!)
  const meshRef3 = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    // Floating animation for shapes
    if (meshRef1.current) {
      meshRef1.current.position.y = Math.sin(time * 0.8) * 0.5
      meshRef1.current.rotation.x = time * 0.3
      meshRef1.current.rotation.z = time * 0.2
    }

    if (meshRef2.current) {
      meshRef2.current.position.y = Math.cos(time * 0.6) * 0.3
      meshRef2.current.rotation.y = time * 0.4
      meshRef2.current.rotation.x = time * 0.1
    }

    if (meshRef3.current) {
      meshRef3.current.position.y = Math.sin(time * 1.2) * 0.4
      meshRef3.current.rotation.z = time * 0.5
      meshRef3.current.rotation.y = time * 0.3
    }
  })

  return (
    <>
      {/* Wireframe Box */}
      <Box ref={meshRef1} position={[-4, 2, -2]} scale={0.8}>
        <meshBasicMaterial color="#0ea5e9" wireframe />
      </Box>

      {/* Glowing Torus */}
      <Torus ref={meshRef2} position={[4, -1, -1]} scale={0.6} args={[1, 0.3, 16, 32]}>
        <meshBasicMaterial color="#2563eb" />
      </Torus>

      {/* Floating Sphere */}
      <Sphere ref={meshRef3} position={[2, 3, -3]} scale={0.5}>
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.7} />
      </Sphere>
    </>
  )
}

// Interactive mouse-following element
function MouseFollower() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { mouse, viewport } = useThree()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x = (mouse.x * viewport.width) / 4
      meshRef.current.position.y = (mouse.y * viewport.height) / 4
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Torus ref={meshRef} scale={0.3} args={[0.5, 0.2, 8, 16]}>
      <meshBasicMaterial color="#0ea5e9" wireframe transparent opacity={0.6} />
    </Torus>
  )
}

// Main Three.js Scene
export function ThreeHero() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <Particles />
        <FloatingShapes />
        <MouseFollower />
      </Canvas>
    </div>
  )
}
