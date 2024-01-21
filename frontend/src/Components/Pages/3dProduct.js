/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { WebGLRenderer,PerspectiveCamera , Scene, Vector3 } from 'three';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Seiko from '../../assets/tagheuer/sceneRender';
import Rolex from '../../assets/rolexsubmarine/sceneRender';
import PradaBag from '../../assets/pradaBag/sceneRender';
import Channel5 from '../../assets/channel5/sceneRender';
import Patek from '../../assets/grandComplications/sceneRender';
import Goose from '../../assets/canadaGoosePuffer/sceneRender'
import Backpack from '../../assets/lvBackPack/sceneRender';
import Lvbag from '../../assets/lvbag/sceneRender';
import Hoodie from '../../assets/balenciagaDefender/sceneRender';
import '../../stylesheets/_product.scss';






const animationProducts = async () => {
  const nameProductURL = window.location.search;
  const urlParams = new URLSearchParams(nameProductURL);
  const nameproduct =  urlParams.get('product');
  console.log(`nameProduct${  nameproduct}`);

const scene = new Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
const renderer = new WebGLRenderer({antialias: true , alpha : true});
renderer.gammaOutput = true;
renderer.gammaFactor = 2.2;
renderer.physicallyCorrectLights = true;

const seiko = new Seiko();
const rolex = new Rolex();
const pradaBag = new PradaBag();
const channel5 = new Channel5();
const patek = new Patek();
const goose = new Goose();
const backpack = new Backpack();
const hoodie = new Hoodie();
const lvBag = new Lvbag();

const topLight = new THREE.DirectionalLight(0xffffff, 10);
const light = new THREE.HemisphereLight( 0xffffbb, 0xffffff, 10 );

let unavailableHtml ='';
let model = '';
// scene.add( directionalLight );
// scene.add( hemisphereLight ) ;

if(nameproduct ==='pradaBag'){
  model = pradaBag;
  scene.background = new THREE.Color('white');
  camera.position.set(9,8,14);
}else if(nameproduct === 'rolexSubmarine'){
  model = rolex;
  camera.position.set(9,8,14);
  }else if (nameproduct ==='channelN5'){
  model = channel5;
  camera.position.set(0 ,15 , 10)
  }else if(nameproduct === 'GrandComplications'){
    model = patek;
    scene.background = new THREE.Color('black');
    camera.position.set(9,8,14);
  }else if(nameproduct === 'canadaGoosePuffer'){
    model = goose;
    camera.position.set(9,8,14);
  }
  else if(nameproduct === 'seikoCoutura'){
    model = seiko;
    camera.position.set(9,8,14);
  }else if (nameproduct === 'lvBackpack'){
    model = backpack;
    camera.position.set(9,8,14);
  }else if (nameproduct === 'LVDubai'){
    model = lvBag;
    camera.position.set(9,8,14);
  }else if(nameproduct === 'balenciagaDefender'){
      model = hoodie;
      camera.position.set(9,8,14);
  }else if (nameproduct === 'notavailable'){
    model = '';
    unavailableHtml = ` <div> 
    <h1 class="product-unavailable"> Sorry the version 3D of this product is unavailable at the moment </h1>
     </div> `;
  }
// model = gucciBag;
scene.background = new THREE.Color('white');
scene.add(model);
scene.add(topLight);
scene.add(light);
scene.add(camera);

// camera

// 

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x7ec0ee, 1);

// render loop
const onAnimationFrameHandler = (timeStamp) => {
  renderer.render(scene, camera );
  model.update && model.update(timeStamp);
  window.requestAnimationFrame(onAnimationFrameHandler);
}
window.requestAnimationFrame(onAnimationFrameHandler);
// resize
const windowResizeHanlder = () => { 
  const { innerHeight, innerWidth } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
windowResizeHanlder();
window.addEventListener('resize', windowResizeHanlder);

const controls = new OrbitControls(camera, renderer.domElement);
// dom
const html = `  <div class="container-btn-back" > <button class="btn-back" >Back to product</button>  </div>` ;
const main = document.querySelector('main');
main.innerHTML = '';
const div = document.createElement('div');

div.innerHTML = html;
if (div) {
div.appendChild(renderer.domElement);
main.appendChild(div);
if(unavailableHtml !== ''){
  div.className="div3D";
  scene.remove(model);
  div.innerHTML =  unavailableHtml + html;
}

const btn = document.querySelector('.btn-back');
btn.addEventListener('click', ()=>{
  scene.remove(model);
  window.history.back();
});


window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  scene.remove(model);
});
}



};
export default animationProducts;