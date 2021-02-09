import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'



const scene = new THREE.Scene();
const loader = new GLTFLoader();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const peko = 'assets/peko.glb';


// Fog
const color = 0x333333;  // white
const near = 7;
const far = 15;
scene.fog = new THREE.Fog(color, near, far);
scene.background = new THREE.Color(color);


// Lights
const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );
const light2 = new THREE.PointLight( 0xfffffff, 1, 100 );
light2.position.set( -50, 50, 50 );
scene.add( light2 );

let renderer;

camera.position.z = 10;

const animate = () => {
  requestAnimationFrame(animate);
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
