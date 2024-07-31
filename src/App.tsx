import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
// import { Cube } from "./models/shapes/Cube.tsx";
// import Idle from "./models/characters/Girl/Idle.tsx";
import Woman from "./models/characters/Woman/Sofi.tsx";

function App() {
  return (
    <>
      <div>SOFIA FERRER</div>
      <Canvas>
        <OrbitControls />
        <Environment files="./img/studio-background.exr" background />
        <directionalLight intensity={0.5} />
        <ambientLight intensity={1} />
        {/* <Cube />
        <Idle /> */}
        <Woman />
      </Canvas>
    </>
  );
}

export default App;
