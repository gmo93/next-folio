import {
  useGLTF,
  PerspectiveCamera,
  CameraControls,
  useKeyboardControls,
  OrbitControls,
  useAnimations,
  useTexture,
} from "@react-three/drei";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { Orbit } from "next/font/google";
import { use, useEffect, useRef, useState } from "react";

useGLTF.preload("/hamburger.glb");

export default function Model({ height, y }) {
  const group = useRef(null);
  const ref = useRef();

  const { nodes, materials, scene } = useGLTF("/hamburger.glb");
  const burger = useGLTF("/hamburger.glb");
  const burgerIngs = burger.nodes;

  Object.entries(burgerIngs).map((ing) => {
    ing[1].position.y = ing[1].position.y * 1.25;
  });

  //   useGLTF("/hamburger.glb").materials[2].visible = false;
  const controls = useThree((state) => state.controls);

  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  return (
    <group ref={group}>
      <OrbitControls />
      <primitive
        position={[0, 0, 0]}
        ref={ref}
        material={materials}
        object={scene}
      />
    </group>
  );
}
