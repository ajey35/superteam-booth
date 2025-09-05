"use client"

import { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei"
import { Suspense } from "react"
import { Booth } from "@/components/booth/Booth"
import { Loader } from "@/components/ui/Loader"

export function BoothCanvas() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-orange-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-orange-600 font-medium">Loading 3D Booth...</p>
        </div>
      </div>
    )
  }

  return (
    <Canvas camera={{ position: [8, 6, 8], fov: 50 }} shadows className="w-full h-full">
      <Suspense fallback={<Loader />}>
        {/* Lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* Environment and controls */}
        <Environment preset="warehouse" />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={20}
          maxPolarAngle={Math.PI / 2.2}
        />

        {/* Main booth */}
        <Booth />

        {/* Ground shadows */}
        <ContactShadows position={[0, -0.01, 0]} opacity={0.3} scale={15} blur={2} far={4} />
      </Suspense>
    </Canvas>
  )
}


