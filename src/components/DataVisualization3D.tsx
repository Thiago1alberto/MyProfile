import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DataVisualization3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current; // Store reference for cleanup

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    rendererRef.current = renderer;
    currentMount.appendChild(renderer.domElement);

    // Create data visualization elements
    createDataNodes(scene);
    createConnectionLines(scene);
    createFloatingData(scene);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x3b82f6, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Rotate the entire scene slowly
      scene.rotation.y += 0.005;
      scene.rotation.x += 0.002;

      // Animate individual elements
      scene.children.forEach((child, index) => {
        if (child.userData.isDataNode) {
          child.rotation.x += 0.01;
          child.rotation.y += 0.01;
          child.position.y += Math.sin(Date.now() * 0.001 + index) * 0.02;
        }
        if (child.userData.isFloatingData) {
          child.position.y += Math.sin(Date.now() * 0.002 + index) * 0.01;
          child.rotation.z += 0.005;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!currentMount || !camera || !renderer) return;
      
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const createDataNodes = (scene: THREE.Scene) => {
    const positions = [
      { x: -6, y: 2, z: 0 },
      { x: 0, y: 4, z: -2 },
      { x: 6, y: 1, z: 1 },
      { x: -3, y: -2, z: 2 },
      { x: 4, y: -1, z: -1 },
    ];

    positions.forEach((pos, index) => {
      // Create glowing data cubes
      const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      const material = new THREE.MeshLambertMaterial({
        color: index % 2 === 0 ? 0x3b82f6 : 0x10b981, // Blue and green
        transparent: true,
        opacity: 0.8,
      });

      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(pos.x, pos.y, pos.z);
      cube.userData.isDataNode = true;

      // Add wireframe overlay
      const wireframeGeometry = new THREE.EdgesGeometry(geometry);
      const wireframeMaterial = new THREE.LineBasicMaterial({ 
        color: 0x60a5fa,
        linewidth: 2 
      });
      const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
      cube.add(wireframe);

      scene.add(cube);
    });
  };

  const createConnectionLines = (scene: THREE.Scene) => {
    const points = [
      new THREE.Vector3(-6, 2, 0),
      new THREE.Vector3(0, 4, -2),
      new THREE.Vector3(6, 1, 1),
      new THREE.Vector3(-3, -2, 2),
      new THREE.Vector3(4, -1, -1),
      new THREE.Vector3(-6, 2, 0), // Close the loop
    ];

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.3,
    });

    const line = new THREE.Line(geometry, material);
    scene.add(line);
  };

  const createFloatingData = (scene: THREE.Scene) => {
    // Create floating data points (smaller spheres)
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.SphereGeometry(0.2, 8, 8);
      const material = new THREE.MeshLambertMaterial({
        color: Math.random() > 0.5 ? 0x3b82f6 : 0x10b981,
        transparent: true,
        opacity: 0.6,
      });

      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      sphere.userData.isFloatingData = true;

      scene.add(sphere);
    }
  };

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full min-h-[400px] relative"
      style={{ 
        background: 'transparent',
        overflow: 'hidden'
      }}
    />
  );
};

export default DataVisualization3D;
