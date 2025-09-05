"use client"

import { Box, Cylinder, RoundedBox, Text } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

export function BoothStructure() {
  const structureRef = useRef<Mesh>(null)

  const premiumWhiteMaterial = {
    color: "#FAFAFA",
    roughness: 0.05,
    metalness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
  }

  const premiumFloorMaterial = {
    color: "#1A1A1A",
    roughness: 0.1,
    metalness: 0.9,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  }

  const accentMaterial = {
    color: "#ff5722",
    roughness: 0.2,
    metalness: 0.2,
    emissive: "#ff5722",
    emissiveIntensity: 0.15,
  }

  const brandOrangeMaterial = {
    color: "#ff5722",
    roughness: 0.3,
    metalness: 0.1,
    emissive: "#ff5722",
    emissiveIntensity: 0.2,
  }

  return (
    <group ref={structureRef}>
      <RoundedBox args={[4.5, 0.12, 4.5]} position={[0, -0.06, 0]} radius={0.08} receiveShadow>
        <meshStandardMaterial {...premiumFloorMaterial} />
      </RoundedBox>

      {/* Floor border accent */}
      <RoundedBox args={[4.6, 0.02, 4.6]} position={[0, 0.01, 0]} radius={0.1} receiveShadow>
        <meshStandardMaterial {...brandOrangeMaterial} />
      </RoundedBox>

      {/* Main curved back wall - larger */}
      <group position={[0, 0, -1.8]}>
        <Cylinder
          args={[2.4, 2.4, 3.2, 32, 1, false, 0, Math.PI]}
          position={[0, 1.6, 0]}
          rotation={[0, 0, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial {...premiumWhiteMaterial} />
        </Cylinder>
      </group>

      {/* Left curved wall - larger */}
      <group position={[-1.8, 0, -0.9]}>
        <Cylinder
          args={[1.6, 1.6, 3.2, 32, 1, false, -Math.PI / 2, Math.PI / 2]}
          position={[0, 1.6, 0]}
          rotation={[0, 0, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial {...premiumWhiteMaterial} />
        </Cylinder>
      </group>

      {/* Right curved wall - larger */}
      <group position={[1.8, 0, -0.9]}>
        <Cylinder
          args={[1.6, 1.6, 3.2, 32, 1, false, Math.PI / 2, Math.PI / 2]}
          position={[0, 1.6, 0]}
          rotation={[0, 0, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial {...premiumWhiteMaterial} />
        </Cylinder>
      </group>

      <group position={[0, 3.1, -0.7]}>
        <RoundedBox args={[4.2, 0.15, 3.5]} radius={0.08} castShadow>
          <meshStandardMaterial {...premiumWhiteMaterial} />
        </RoundedBox>

        {/* Enhanced LED strip lighting system */}
        <Box args={[3.8, 0.03, 0.08]} position={[0, -0.08, -1.4]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
        </Box>
        <Box args={[0.08, 0.03, 3.2]} position={[-1.9, -0.08, 0]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
        </Box>
        <Box args={[0.08, 0.03, 3.2]} position={[1.9, -0.08, 0]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
        </Box>

        {/* Corner accent lighting */}
        <Box args={[0.05, 0.05, 0.05]} position={[-1.9, -0.08, -1.4]}>
          <meshStandardMaterial {...brandOrangeMaterial} />
        </Box>
        <Box args={[0.05, 0.05, 0.05]} position={[1.9, -0.08, -1.4]}>
          <meshStandardMaterial {...brandOrangeMaterial} />
        </Box>
      </group>

      <Box args={[0.03, 3.0, 0.08]} position={[-2.1, 1.5, -1.8]}>
        <meshStandardMaterial {...accentMaterial} />
      </Box>
      <Box args={[0.03, 3.0, 0.08]} position={[2.1, 1.5, -1.8]}>
        <meshStandardMaterial {...accentMaterial} />
      </Box>
      <Box args={[4.2, 0.08, 0.03]} position={[0, 3.0, -2.1]}>
        <meshStandardMaterial {...accentMaterial} />
      </Box>

      <Text
        position={[-1.7, 2.2, -0.8]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.3}
        color="#ff5722"
        anchorX="center"
        anchorY="middle"
      >
        SUPERTEAM
      </Text>
      <Text
        position={[-1.7, 1.9, -0.8]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.2}
        color="#666666"
        anchorX="center"
        anchorY="middle"
      >
        VIETNAM
      </Text>

      <Text
        position={[1.7, 2.2, -0.8]}
        rotation={[0, -Math.PI / 2, 0]}
        fontSize={0.3}
        color="#ff5722"
        anchorX="center"
        anchorY="middle"
      >
        SUPERTEAM
      </Text>
      <Text
        position={[1.7, 1.9, -0.8]}
        rotation={[0, -Math.PI / 2, 0]}
        fontSize={0.2}
        color="#666666"
        anchorX="center"
        anchorY="middle"
      >
        VIETNAM
      </Text>

      <Text position={[0, 2.5, -2.35]} fontSize={0.4} color="#ff5722" anchorX="center" anchorY="middle">
        SUPERTEAM VN
      </Text>
      <Text position={[0, 2.1, -2.35]} fontSize={0.15} color="#888888" anchorX="center" anchorY="middle">
        Building the Future of Web3
      </Text>

      <Box args={[0.6, 0.02, 0.02]} position={[0, 1.85, -2.34]}>
        <meshStandardMaterial {...brandOrangeMaterial} />
      </Box>
    </group>
  )
}
