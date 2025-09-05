"use client"

import type { Group } from "three"
import { useRef } from "react"
import { BoothStructure } from "./BoothStructure"
import { SeatingArea } from "./SeatingArea"
import { MerchShelf } from "./MerchShelf"
import { InfoPanel } from "./InfoPanel"
import { MediaScreen } from "./MediaScreen"
import { BrandingArea } from "./BrandingArea"
import { ReceptionCounter } from "./ReceptionCounter"

export function Booth() {
  const boothRef = useRef<Group>(null)

  return (
    <group ref={boothRef} position={[0, 0, 0]} scale={[2.2, 2.2, 2.2]}>
      <BoothStructure />

      <ReceptionCounter position={[0, 0, 0.6]} />

      <SeatingArea position={[-1.0, 0, -0.4]} />

      <MerchShelf position={[1.0, 0, -0.2]} />

      <InfoPanel position={[-1.2, 0, 0.3]} />

      <MediaScreen position={[0, 1.0, -1.3]} />

      <BrandingArea position={[0, 1.2, -1.25]} />
    </group>
  )
}
