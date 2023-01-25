import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Marmelos from "../Models/Marmelos";

const Rotate = () => {
  return (
    <>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight intensity={1} />
        <Marmelos />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Rotate;
