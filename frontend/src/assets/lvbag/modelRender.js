/* eslint-disable import/extensions */
import { Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import MODEL from './lvbag.glb';

export default class Goose extends Object3D {
  constructor() {
    const loader = new GLTFLoader();
    
    super();
   
    this.name = 'Canada Goose Puffer';
    loader.load(MODEL, (gltf)=>{
      const obj = gltf.scene;
      obj.scale.set(1.2,1.2,1.2);
      this.add(obj);
      
    });
  }
}