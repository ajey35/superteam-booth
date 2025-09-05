"use client"

import { RoundedBox, Cylinder, Text } from "@react-three/drei"
import { useRef } from "react"
import type { Group } from "three"

export function ReceptionCounter({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const counterRef = useRef<Group>(null)

  const counterMaterial = {
    color: "#FAFAFA",
    roughness: 0.1,
    metalness: 0.2,
  }

  const accentMaterial = {
    color: "#ff5722",
    roughness: 0.2,
    metalness: 0.1,
  }

  return (
    <group ref={counterRef} position={position}>
      <Cylinder args={[1.2, 1.4, 1.1, 16]} position={[0, 0.55, 0]} castShadow receiveShadow>
        <meshStandardMaterial {...counterMaterial} />
      </Cylinder>

      <Cylinder args={[1.3, 1.5, 0.12, 16]} position={[0, 1.16, 0]} castShadow receiveShadow>
        <meshStandardMaterial {...counterMaterial} />
      </Cylinder>

      <RoundedBox args={[0.9, 0.2, 0.03]} position={[0, 0.75, 1.25]} radius={0.03} castShadow>
        <meshStandardMaterial {...accentMaterial} />
      </RoundedBox>

      <Text position={[0, 0.85, 1.26]} fontSize={0.12} color="#ffffff" anchorX="center" anchorY="middle">
        SUPERTEAM VN
      </Text>

      <Text position={[0, 0.65, 1.26]} fontSize={0.06} color="#ffffff" anchorX="center" anchorY="middle">
        Web3 Community Hub
      </Text>

      <Cylinder args={[1.25, 1.45, 0.03, 16]} position={[0, 0.12, 0]}>
        <meshStandardMaterial color="#ffffff" emissive="#ff5722" emissiveIntensity={0.2} />
      </Cylinder>
    </group>
  )
}
