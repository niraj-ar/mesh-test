import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useInteraction } from "@react-three/xr";

export default function Model({ pos }) {
  const { nodes, materials } = useGLTF("/Marmelos.gltf");

  const [rotate, setRotate] = useState([0, 0, 0]);

  const ModRef = useRef();

  useInteraction(ModRef, "onMove", () => {
    setRotate([0, rotate[1] + Math.PI / 100, 0]);
  });

  const size = 0.002;

  return (
    <group rotation={rotate} position={pos} dispose={null}>
      <mesh
        ref={ModRef}
        geometry={nodes.Box.geometry}
        material={materials.Noah}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={size}
      />
      <mesh
        geometry={nodes["MarMelos-3Tier"].geometry}
        material={materials["Plastic_-_Glossy_(Red)_(1)"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={size}
      />
      <mesh
        geometry={nodes["MarMelos-3Tier0"].geometry}
        material={materials["Plastic_-_Glossy_(White)"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={size}
      />
    </group>
  );
}

useGLTF.preload("/Marmelos.gltf");
