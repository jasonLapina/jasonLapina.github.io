import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Laptop() {
  const { scene: laptop } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const { scene: phone } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  );

  const laptopRef = useRef();
  const phoneRef = useRef();

  useFrame((state, delta) => {
    phoneRef.current.rotation.y += -delta * 1.1;
    laptopRef.current.rotation.y += delta * 0.8;
  });

  return (
    <>
      <ambientLight intensity={4} />
      <Environment preset='night' />
      <primitive
        ref={phoneRef}
        object={phone}
        rotation-x={0.2}
        position={[3.5, -1, 1]}
        scale={0.3}
      />
      <primitive
        object={laptop}
        ref={laptopRef}
        scale={0.5}
        position={[-3.4, -1.2, 1]}
      />
    </>
  );
}
export default Laptop;
