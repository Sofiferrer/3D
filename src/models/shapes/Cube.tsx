export const Cube = () => {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
