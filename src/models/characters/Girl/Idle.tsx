import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import * as THREE from "three";

// Definir la interfaz GLTF personalizada para TypeScript
interface IdleGLTF extends GLTF {
  nodes: {
    Ch03: THREE.SkinnedMesh;
    mixamorigHips: THREE.Object3D;
  };
  materials: {
    "Ch03_Body.001": THREE.Material;
  };
}

const Idle: React.FC<GroupProps> = (props) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models/idle.glb") as IdleGLTF;
  // const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
          <skinnedMesh
            name="Ch03"
            geometry={nodes.Ch03.geometry}
            material={materials["Ch03_Body.001"]}
            skeleton={nodes.Ch03.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
};

export default Idle;

useGLTF.preload("/models/idle.glb");
