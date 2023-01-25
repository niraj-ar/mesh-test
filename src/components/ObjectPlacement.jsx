import React, { Suspense, useRef, useState } from "react";
import { Box, Environment, Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Marmelos from "../Models/Marmelos";
import { ARButton, useHitTest, useInteraction, XR } from "@react-three/xr";

const ObjectPlacement = () => {
  const [vis, setVis] = useState(false);
  const [pos, setPos] = useState({});

  const hitRef = useRef();

  const onClick = () => {
    setVis(true);
    setPos(hitRef.current.position);
  };

  const HitTest = () => {
    useHitTest((hitMatrix) => {
      hitMatrix.decompose(
        hitRef.current.position,
        hitRef.current.quaternion,
        hitRef.current.scale
      );
    });

    useInteraction(hitRef, "onSelect", onClick);
    return (
      <>
        {/* <Chair vis={vis} pos={pos} /> */}

        <Marmelos vis={vis} pos={pos} />

        <Box
          visible={!vis}
          ref={hitRef}
          args={[0.5, 0.05, 0.5]}
          material-color="white"
        />
      </>
    );
  };

  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test", "local"],
        }}
      />
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <XR foveation={1}>
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <HitTest />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls />
        </XR>
      </Canvas>
      <Loader />
    </>
  );
};

export default ObjectPlacement;
