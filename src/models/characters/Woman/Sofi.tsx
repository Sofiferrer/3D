import { FC, useRef } from "react";
import { GroupProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";
import * as THREE from "three";

// Definir la interfaz GLTF
interface GLTF {
  scene: Object3D;
  nodes: {
    [key: string]: THREE.Mesh | THREE.SkinnedMesh | Object3D;
  };
  materials: {
    [key: string]: THREE.Material;
  };
  animations: THREE.AnimationClip[];
}

const Woman: FC<GroupProps> = (props) => {
  const group = useRef<THREE.Group>(null);
  const { scene, nodes, materials, animations } = useGLTF(
    "/models/sofi.glb"
  ) as GLTF;
  // const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  //const { actions } = useAnimations(animations, group);
  console.log(scene, nodes, materials, animations);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <group name="Eye_Mesh" />
          <group name="EyeAO_Mesh" />
          <group name="Eyelash_Mesh" />
          <group name="Head_Mesh" />
          <group name="Teeth_Mesh" />
          <group name="Tongue_Mesh" />
          <skinnedMesh
            name="avaturn_hair_0"
            geometry={(nodes.avaturn_hair_0 as THREE.SkinnedMesh).geometry}
            material={materials.avaturn_hair_0_material}
            skeleton={(nodes.avaturn_hair_0 as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_1"
            geometry={(nodes.avaturn_hair_1 as THREE.SkinnedMesh).geometry}
            material={materials.avaturn_hair_1_material}
            skeleton={(nodes.avaturn_hair_1 as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0"
            geometry={(nodes.avaturn_look_0 as THREE.SkinnedMesh).geometry}
            material={materials.avaturn_look_0_material}
            skeleton={(nodes.avaturn_look_0 as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0"
            geometry={(nodes.avaturn_shoes_0 as THREE.SkinnedMesh).geometry}
            material={materials.avaturn_shoes_0_material}
            skeleton={(nodes.avaturn_shoes_0 as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Body_Mesh"
            geometry={(nodes.Body_Mesh as THREE.SkinnedMesh).geometry}
            material={materials.Body}
            skeleton={(nodes.Body_Mesh as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Eye_Mesh001"
            geometry={(nodes.Eye_Mesh001 as THREE.SkinnedMesh).geometry}
            material={materials.Eyes}
            skeleton={(nodes.Eye_Mesh001 as THREE.SkinnedMesh).skeleton}
            morphTargetDictionary={
              (nodes.Eye_Mesh001 as THREE.SkinnedMesh).morphTargetDictionary
            }
            morphTargetInfluences={
              (nodes.Eye_Mesh001 as THREE.SkinnedMesh).morphTargetInfluences
            }
          />
          <skinnedMesh
            name="EyeAO_Mesh001"
            geometry={(nodes.EyeAO_Mesh001 as THREE.SkinnedMesh).geometry}
            material={materials.EyeAO}
            skeleton={(nodes.EyeAO_Mesh001 as THREE.SkinnedMesh).skeleton}
            morphTargetDictionary={
              (nodes.EyeAO_Mesh001 as THREE.SkinnedMesh).morphTargetDictionary
            }
            morphTargetInfluences={
              (nodes.EyeAO_Mesh001 as THREE.SkinnedMesh).morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Eyelash_Mesh001"
            geometry={(nodes.Eyelash_Mesh001 as THREE.SkinnedMesh).geometry}
            material={materials.Eyelash}
            skeleton={(nodes.Eyelash_Mesh001 as THREE.SkinnedMesh).skeleton}
            morphTargetDictionary={
              (nodes.Eyelash_Mesh001 as THREE.SkinnedMesh).morphTargetDictionary
            }
            morphTargetInfluences={
              (nodes.Eyelash_Mesh001 as THREE.SkinnedMesh).morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Head_Mesh001"
            geometry={(nodes.Head_Mesh001 as THREE.SkinnedMesh).geometry}
            material={materials.Head}
            skeleton={(nodes.Head_Mesh001 as THREE.SkinnedMesh).skeleton}
            morphTargetDictionary={
              (nodes.Head_Mesh001 as THREE.SkinnedMesh).morphTargetDictionary
            }
            morphTargetInfluences={
              (nodes.Head_Mesh001 as THREE.SkinnedMesh).morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Teeth_Mesh001"
            geometry={(nodes.Teeth_Mesh001 as THREE.SkinnedMesh).geometry}
            material={materials.Teeth}
            skeleton={(nodes.Teeth_Mesh001 as THREE.SkinnedMesh).skeleton}
            morphTargetDictionary={
              (nodes.Teeth_Mesh001 as THREE.SkinnedMesh).morphTargetDictionary
            }
            morphTargetInfluences={
              (nodes.Teeth_Mesh001 as THREE.SkinnedMesh).morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Tongue_Mesh001"
            geometry={(nodes.Tongue_Mesh001 as THREE.SkinnedMesh).geometry}
            material={materials["Teeth.001"]}
            skeleton={(nodes.Tongue_Mesh001 as THREE.SkinnedMesh).skeleton}
            morphTargetDictionary={
              (nodes.Tongue_Mesh001 as THREE.SkinnedMesh).morphTargetDictionary
            }
            morphTargetInfluences={
              (nodes.Tongue_Mesh001 as THREE.SkinnedMesh).morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
};

export default Woman;
useGLTF.preload("/models/sofi.glb");
