'use client'

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Animate() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Criando cena, câmera e renderizador
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
        camera.position.set(0, 0, 100);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const points = [];
        points.push( new THREE.Vector3( - 10, 0, 0 ) );
        points.push( new THREE.Vector3( 0, 10, 0 ) );
        points.push( new THREE.Vector3( 10, 0, 0 ) );
        
        const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
        const geometry = new THREE.BufferGeometry().setFromPoints( points );
        const line = new THREE.Line( geometry, material );

        scene.add( line );
        renderer.render( scene, camera)

        // Cleanup ao desmontar o componente
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} />;
}
