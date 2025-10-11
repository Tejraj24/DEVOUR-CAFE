import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'

function Bean() {
  return (
    <Float speed={1} rotationIntensity={0.6} floatIntensity={0.6}>
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial color="#b08d57" roughness={0.2} metalness={0.6} distort={0.25} speed={1.2} />
      </mesh>
    </Float>
  )
}

function Hero3D() {
  return (
    <div style={{ position: 'absolute', inset: 0 }} aria-hidden>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <color attach="background" args={["#0e0e0e"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />
        <directionalLight position={[-5, -2, -3]} intensity={0.4} />
        <Stars radius={20} depth={40} count={600} factor={2} saturation={0} fade speed={0.5} />
        <Bean />
      </Canvas>
    </div>
  )
}

export default Hero3D
