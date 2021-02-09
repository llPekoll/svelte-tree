import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

const scene = new THREE.Scene();
const loader = new GLTFLoader();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
const peko = 'assets/peko.glb';

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

let renderer;

scene.add(cube);
camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};


loader.load(
	peko,
	function ( gltf ) {
		scene.add( gltf.scene );
		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log( 'An error happened' );
	}
);


const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (el) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  resize();
  animate();
}

window.addEventListener('resize', resize);
