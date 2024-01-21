/* eslint-disable import/extensions */
import { Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import MODEL from './puffer.glb';

export default class louisVuittonPuffer extends Object3D {
  constructor() {
    const loader = new GLTFLoader();
    
    super();
   
    this.name = 'Puffer louis Vuitton';
    loader.load(MODEL, (gltf)=>{
      const obj = gltf.scene;
      obj.scale.set(100,100,100);
      this.add(gltf.scene);
      
    });
  }
}