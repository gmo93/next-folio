"use client";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import Model from "./Model";
import styles from "@/styles/Home.module.css";
import { Suspense } from "react";

export default function Scene({ height, y }) {
  return (
    <div className={styles.sceneCont}>
      <Canvas>
        {/* <directionalLight position={[-5, 0, 0]} intensity={0.001} /> */}
        <directionalLight intensity={5} />
        <Suspense fallback={null}>
          <Model height={height} y={y} />
        </Suspense>
      </Canvas>
    </div>
  );
}
