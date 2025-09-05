import { Html, useProgress } from "@react-three/drei"

export function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="flex flex-col items-center gap-4 p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
        <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
        <p className="text-orange-600 font-medium">Loading booth... {progress.toFixed(0)}%</p>
      </div>
    </Html>
  )
}
