import { OrbitControls } from "@react-three/drei"

export const HomeScene = () => {
    return (
        <>
        <OrbitControls/>
        <mesh>
            <boxGeometry/>
            <meshNormalMaterial/>
        </mesh>
        </>
    )
}

