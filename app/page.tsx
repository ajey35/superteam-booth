"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei"
import { Suspense } from "react"
import { Booth } from "@/components/booth/Booth"
import { Loader } from "@/components/ui/Loader"

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-orange-600 mb-2">Superteam VN Booth</h1>
        <p className="text-sm text-gray-600 max-w-xs">
          Next-generation 3×3 event booth design featuring warm, welcoming spaces for conversations, merchandise
          display, and brand engagement.
        </p>
      </div>

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
    </div>
  )
}
