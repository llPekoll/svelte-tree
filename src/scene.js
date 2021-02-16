import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {gsap} from 'gsap';


const scene = new THREE.Scene();
const loader = new GLTFLoader();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;
camera.position.x = 1;
gsap.to(camera.position, {y: -.2, repeat:-1, yoyo:true, duration: 3,ease: "sine"});

const peko = 'assets/peko.glb';
const pekoTexture = 'assets/text_low.jpg';

// Fog
const color = 0x333333;  // white
const near = 5;
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



let material;
const geometry = new THREE.BufferGeometry();
const vertices = [];

const sprite = new THREE.TextureLoader().load( 'assets/po.png' );

				for ( let i = 0; i < 100; i ++ ) {

					const x = 30 * Math.random() - 5;
					const y = 10 * Math.random() - 5;
					const z = 30 * Math.random() - 5;

					vertices.push( x, y, z );

				}

geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
let parameters = [
    [[ 1.0, 0.2, 0.5 ], sprite, 0.1 ],
    [[ 0.95, 0.1, 0.5 ], sprite, 0.2 ],
    [[ 0.90, 0.05, 0.5 ], sprite, 0.3 ],
    [[ 0.85, 0, 0.5 ], sprite, 0.3 ],
    [[ 0.80, 0, 0.5 ], sprite, 0.3 ]
];
let materials=[];
for ( let i = 0; i < parameters.length; i ++ ) {

    const color = parameters[ i ][ 0 ];
    const sprite = parameters[ i ][ 1 ];
    const size = parameters[ i ][ 2 ];

    materials[ i ] = new THREE.PointsMaterial( { size: size, map: sprite, blending: THREE.AdditiveBlending, depthTest: false, transparent: true } );
    materials[ i ].color.setHSL( color[ 0 ], color[ 1 ], color[ 2 ] );

    const particles = new THREE.Points( geometry, materials[ i ] );

    particles.rotation.x = Math.random() * 6;
    particles.rotation.y = Math.random() * 6;
    particles.rotation.z = Math.random() * 6;

    scene.add( particles );

}


const time = Date.now() * 0.00005;
const animate = () => {
	light.position.x = 80 * Math.sin(-Date.now() / 500)-10;
	light.position.z = 80 * Math.cos(-Date.now() / 500)-10;
  	requestAnimationFrame(animate);
    //   for ( let i = 0; i < scene.children.length; i ++ ) {
    //     const object = scene.children[ i ];
    //     if ( object instanceof THREE.Points ) {
    //         object.position.y = time * ( i < 4 ? i + 10 : - ( i + 10 ) );
    //     }
    // }
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
export const UpdadeFace = (num) => {
	var pp = scene.getObjectByName( "peko", true );
	if(num == 0){
		gsap.to(pp.rotation, {y: 0,z:0, duration: 1,ease: "sine"});
		gsap.to(pp.position, {y: 0,x:0, duration: 1,ease: "sine"});
	}
	else{
		gsap.to(pp.rotation, {y: -0.5,z:0.3, duration: 1,ease: "sine"});
		gsap.to(pp.position, {y: -1,x:-1, duration: 1,ease: "sine"});
	}
	}



window.addEventListener('resize', resize);

