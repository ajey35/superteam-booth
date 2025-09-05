import { Box, Text } from "@react-three/drei"

interface MerchShelfProps {
  position: [number, number, number]
}

export function MerchShelf({ position }: MerchShelfProps) {
  return (
    <group position={position}>
      <Box args={[1.2, 2, 0.4]} position={[0, 1, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.05} clearcoat={1} clearcoatRoughness={0.1} />
      </Box>

      <Box args={[1.1, 0.05, 0.35]} position={[0, 0.6, 0]} castShadow>
        <meshStandardMaterial color="#f5f5f5" roughness={0.2} />
      </Box>
      <Box args={[1.1, 0.05, 0.35]} position={[0, 1.2, 0]} castShadow>
        <meshStandardMaterial color="#f5f5f5" roughness={0.2} />
      </Box>
      <Box args={[1.1, 0.05, 0.35]} position={[0, 1.8, 0]} castShadow>
        <meshStandardMaterial color="#f5f5f5" roughness={0.2} />
      </Box>

      {/* T-shirt with Superteam branding */}
      <Box args={[0.2, 0.25, 0.08]} position={[-0.3, 1.9, 0.1]} castShadow>
        <meshStandardMaterial color="#ff5722" />
      </Box>
      <Text position={[-0.3, 1.65, 0.2]} fontSize={0.03} color="#333" anchorX="center">
        T-Shirt
      </Text>

      {/* Sticker packs */}
      <Box args={[0.12, 0.15, 0.03]} position={[0.1, 1.3, 0.1]} castShadow>
        <meshStandardMaterial color="#ff5722" />
      </Box>
      <Box args={[0.12, 0.15, 0.03]} position={[0.3, 1.3, 0.1]} castShadow>
        <meshStandardMaterial color="#ffffff" />
      </Box>
      <Text position={[0.2, 1.05, 0.2]} fontSize={0.03} color="#333" anchorX="center">
        Stickers
      </Text>

      <Box args={[0.08, 0.08, 0.08]} position={[-0.2, 0.7, 0.1]} castShadow>
        <meshStandardMaterial color="#ff5722" />
      </Box>
      <Box args={[0.15, 0.1, 0.05]} position={[0.2, 0.7, 0.1]} castShadow>
        <meshStandardMaterial color="#ffffff" />
      </Box>
      <Text position={[0, 0.45, 0.2]} fontSize={0.03} color="#333" anchorX="center">
        Accessories
      </Text>

      <Text position={[0, 2.1, 0.2]} fontSize={0.06} color="#ff5722" anchorX="center">
        SUPERTEAM MERCH
      </Text>
    </group>
  )
}
