import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Sphere, Torus } from "@react-three/drei";
import { Mesh } from "three";

export default function Scene() {
    const boxRef = useRef<Mesh>(null); // Указываем тип Mesh
    const sphereRef = useRef<Mesh>(null);
    const torusRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (boxRef.current) {
            boxRef.current.rotation.x += delta;
            boxRef.current.rotation.y += delta;
        }
        if (sphereRef.current) {
            sphereRef.current.rotation.y += delta;
        }
        if (torusRef.current) {
            torusRef.current.rotation.x += delta;
            torusRef.current.rotation.z += delta;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Box ref={boxRef} position={[-1.5, 0, 0]}>
                <meshStandardMaterial color="hotpink" />
            </Box>
            <Sphere ref={sphereRef} position={[0, 0, 0]} args={[0.5, 32, 32]}>
                <meshStandardMaterial color="lightblue" />
            </Sphere>
            <Torus ref={torusRef} position={[1.5, 0, 0]} args={[0.3, 0.15, 16, 100]}>
                <meshStandardMaterial color="lightgreen" />
            </Torus>
        </>
    );
}
