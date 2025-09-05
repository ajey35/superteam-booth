import { Cylinder } from "@react-three/drei"

interface SeatingAreaProps {
  position: [number, number, number]
}

export function SeatingArea({ position }: SeatingAreaProps) {
  const orangeMaterial = {
    color: "#ff5722",
    roughness: 0.6,
    metalness: 0.1,
  }

  const woodMaterial = {
    color: "#D2691E",
    roughness: 0.8,
    metalness: 0.1,
  }

  return (
    <group position={position}>
      {/* Bean bag chair 1 */}
      <Cylinder args={[0.4, 0.3, 0.3, 16]} position={[0, 0.15, 0]} castShadow>
        <meshStandardMaterial {...orangeMaterial} />
      </Cylinder>

      {/* Bean bag chair 2 */}
      <Cylinder args={[0.4, 0.3, 0.3, 16]} position={[0.8, 0.15, 0.2]} castShadow>
        <meshStandardMaterial {...orangeMaterial} />
      </Cylinder>

      {/* Small coffee table */}
      <Cylinder args={[0.25, 0.25, 0.05, 16]} position={[0.4, 0.35, 0.1]} castShadow>
        <meshStandardMaterial {...woodMaterial} />
      </Cylinder>

      {/* Table legs */}
      {[0, 1, 2, 3].map((i) => (
        <Cylinder
          key={i}
          args={[0.02, 0.02, 0.3, 8]}
          position={[0.4 + Math.cos((i * Math.PI) / 2) * 0.15, 0.15, 0.1 + Math.sin((i * Math.PI) / 2) * 0.15]}
          castShadow
        >
          <meshStandardMaterial {...woodMaterial} />
        </Cylinder>
      ))}
    </group>
  )
}
