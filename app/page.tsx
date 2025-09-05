"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const BoothCanvas = dynamic(() => import("@/components/booth/BoothCanvas").then(m => m.BoothCanvas), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-orange-50 to-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
        <p className="text-orange-600 font-medium">Loading 3D Booth...</p>
      </div>
    </div>
  ),
})

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="w-full h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-orange-600 mb-2">Superteam VN Booth</h1>
        <p className="text-sm text-gray-600 max-w-xs">
          Next-generation 3×3 event booth design featuring warm, welcoming spaces for conversations, merchandise
          display, and brand engagement.
        </p>
      </div>

      {isClient ? <BoothCanvas /> : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-orange-600 font-medium">Loading 3D Booth...</p>
          </div>
        </div>
      )}
    </div>
  )
}
