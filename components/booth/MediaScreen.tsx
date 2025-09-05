import { Box, Text } from "@react-three/drei"

interface MediaScreenProps {
  position: [number, number, number]
}

export function MediaScreen({ position }: MediaScreenProps) {
  const blackMaterial = {
    color: "#000000",
    roughness: 0.1,
    metalness: 0.8,
  }

  const screenMaterial = {
    color: "#1a1a1a",
    roughness: 0.1,
    metalness: 0.1,
    emissive: "#0a0a0a",
  }

  return (
    <group position={position}>
      {/* Screen frame */}
      <Box args={[1.2, 0.8, 0.1]} position={[0, 1.5, 0]} castShadow receiveShadow>
        <meshStandardMaterial {...blackMaterial} />
      </Box>

      {/* Screen surface */}
      <Box args={[1.1, 0.7, 0.01]} position={[0, 1.5, 0.06]} castShadow>
        <meshStandardMaterial {...screenMaterial} />
      </Box>

      {/* Screen content placeholder */}
      <Text position={[0, 1.7, 0.07]} fontSize={0.08} color="#ff5722" anchorX="center" anchorY="middle">
        SUPERTEAM VN
      </Text>

      {/* Booth specifications and dimensions */}
      <Text position={[0, 1.55, 0.07]} fontSize={0.04} color="#ffffff" anchorX="center" anchorY="middle">
        BOOTH SPECIFICATIONS
      </Text>

      <Text position={[-0.3, 1.45, 0.07]} fontSize={0.025} color="#cccccc" anchorX="left" anchorY="middle">
        Dimensions: 3m × 3m{"\n"}
        Area: 9 sq ft{"\n"}
        Height: 2.5m{"\n"}
        Capacity: 8-10 people
      </Text>

      <Text position={[0.1, 1.45, 0.07]} fontSize={0.025} color="#cccccc" anchorX="left" anchorY="middle">
        Features:{"\n"}• Reception Counter{"\n"}• Seating Area{"\n"}• Media Display{"\n"}• Merch Showcase
      </Text>

      <Text position={[0, 1.25, 0.07]} fontSize={0.02} color="#ff5722" anchorX="center" anchorY="middle">
        Next-Gen Event Booth Design
      </Text>

      {/* Screen stand */}
      <Box args={[0.1, 1.4, 0.1]} position={[0, 0.7, 0]} castShadow>
        <meshStandardMaterial {...blackMaterial} />
      </Box>

      {/* Base */}
      <Box args={[0.4, 0.05, 0.4]} position={[0, 0.025, 0]} castShadow receiveShadow>
        <meshStandardMaterial {...blackMaterial} />
      </Box>
    </group>
  )
}
