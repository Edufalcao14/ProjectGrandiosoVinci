/* eslint-disable import/extensions */
import { Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import MODEL from './patek.glb';

export default class RacerWatch extends Object3D {
  constructor() {
    const loader = new GLTFLoader();
    
    super();
   
    this.name = 'Gucci Bag';
    loader.load(MODEL, (gltf)=>{
      const obj = gltf.scene;
      obj.scale.set(2.6,2.6,2.6);
      this.add(obj);
      
    });
  }
}