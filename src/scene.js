import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {gsap} from 'gsap';



const scene = new THREE.Scene();
const loader = new GLTFLoader();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;
camera.position.x = 1;

const peko = 'assets/peko.glb';
const pekoTexture = 'assets/text_low.jpg';

// Fog
const color = 0x333333;  // white
const near = 6;
const far = 12;
scene.fog = new THREE.Fog(color, near, far);
scene.background = new THREE.Color(color);


// Lights
const light = new THREE.PointLight( 0xffffff, 6, 100 );
light.position.set( 50, 10, 50 );

scene.add( light );
const light2 = new THREE.PointLight( 0xfffffff, 4, 100 );
light2.position.set( -50, 50, 50 );
scene.add( light2 );

let renderer;

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( light, sphereSize );
// scene.add( pointLightHelper );

const animate = () => {
	light.position.x = 80 * Math.sin(-Date.now() / 500)-10;
	light.position.z = 80 * Math.cos(-Date.now() / 500)-10;
  	requestAnimationFrame(animate);
  	renderer.render(scene, camera);
};


const texture = new THREE.TextureLoader().load( pekoTexture );
const pekoMat = new THREE.MeshPhysicalMaterial({color: 'white',
map:texture,
wireframe:true,
roughness: 0.6,
metalness: 0.0,});

loader.load(
	peko,
	function ( gltf ) {
		scene.add( gltf.scene );
		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

		gltf.scene.children[0].name = "peko";
		gltf.scene.children[0].children[0].material = pekoMat;
		gltf.scene.children[0].children[0].position.set(0.087, -0.131, 0.000);
		gltf.scene.children[0].children[0].rotation.set(-.7,0.6,0);

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
export const updadeFace = (num) => {
	var pp = scene.getObjectByName( "peko", true );
	gsap.to(pp.rotation, {y: -0.5,z:0.3, duration: 1,ease: "none"});
	gsap.to(pp.position, {y: -1,x:-1, duration: 1,ease: "none"});

}


window.addEventListener('resize', resize);

