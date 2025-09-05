import { Box, Text } from "@react-three/drei"

interface InfoPanelProps {
  position: [number, number, number]
  rotation?: [number, number, number]
}

export function InfoPanel({ position, rotation = [0, 0, 0] }: InfoPanelProps) {
  const whiteMaterial = {
    color: "#FFFFFF",
    roughness: 0.3,
    metalness: 0.1,
  }

  return (
    <group position={position} rotation={rotation}>
      {/* Panel background */}
      <Box args={[0.6, 1.2, 0.05]} position={[0, 1, 0]} castShadow receiveShadow>
        <meshStandardMaterial {...whiteMaterial} />
      </Box>

      {/* Information text */}
      <Text position={[0, 1.3, 0.03]} fontSize={0.08} color="#ff5722" anchorX="center" anchorY="middle">
        SUPERTEAM VN
      </Text>

      <Text position={[0, 1.1, 0.03]} fontSize={0.04} color="#333333" anchorX="center" anchorY="middle">
        Building the future{"\n"}of Web3 in Vietnam
      </Text>

      {/* QR code placeholder */}
      <Box args={[0.2, 0.2, 0.01]} position={[0, 0.8, 0.03]} castShadow>
        <meshStandardMaterial color="#000000" />
      </Box>

      {/* Brochure holders */}
      <Box args={[0.4, 0.15, 0.03]} position={[0, 0.5, 0.03]} castShadow>
        <meshStandardMaterial color="#ff5722" />
      </Box>
    </group>
  )
}
