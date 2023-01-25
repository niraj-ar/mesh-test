import React, { useRef, useState } from "react";
import { SoftShadows, useGLTF } from "@react-three/drei";
import { useInteraction } from "@react-three/xr";

export default function Model({ vis, pos }) {
  const { nodes, materials } = useGLTF("/chair.gltf");

  const [rotate, setRotate] = useState([0, 0, 0]);

  const ModRef = useRef();

  //   useInteraction(ModRef, "onMove", () => {
  //     setRotate([0, rotate[1] + Math.PI / 100, 0]);
  //   });

  return (
    <>
      <group dispose={null}>
        <mesh
          ref={ModRef}
          castShadow
          receiveShadow
          visible={vis}
          geometry={nodes.koltuk.geometry}
          material={materials.chair}
          position={pos}
          rotation={rotate}
        />
      </group>
    </>
  );
}

useGLTF.preload("/chair.gltf");
