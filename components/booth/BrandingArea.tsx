import { Box, Text } from "@react-three/drei"

interface BrandingAreaProps {
  position: [number, number, number]
  rotation?: [number, number, number]
}

export function BrandingArea({ position, rotation = [0, 0, 0] }: BrandingAreaProps) {
  return (
    <group position={position} rotation={rotation}>
      <Box args={[1.2, 2, 0.08]} position={[0, 1.5, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.05} clearcoat={1} clearcoatRoughness={0.1} />
      </Box>

      <Box args={[0.8, 0.4, 0.02]} position={[0, 2.2, 0.05]} castShadow>
        <meshStandardMaterial color="#ff5722" />
      </Box>

      <Text
        position={[0, 2.2, 0.06]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.02}
      >
        SUPERTEAM
      </Text>

      <Text position={[0, 1.8, 0.05]} fontSize={0.08} color="#ff5722" anchorX="center" anchorY="middle">
        VIETNAM
      </Text>

      <Text position={[0, 1.5, 0.05]} fontSize={0.04} color="#666666" anchorX="center" anchorY="middle">
        Building Web3 Community
      </Text>

      <Box args={[0.4, 0.4, 0.02]} position={[0, 1.0, 0.05]} castShadow>
        <meshStandardMaterial color="#ff5722" />
      </Box>

      <Text position={[0, 1.0, 0.06]} fontSize={0.08} color="#ffffff" anchorX="center" anchorY="middle">
        ST
      </Text>
    </group>
  )
}
