/* eslint-disable import/extensions */
import { Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import MODEL from './generic.glb';

export default class Model extends Object3D {
  constructor() {
    const loader = new GLTFLoader();
    
    super();
   
    this.name = 'Gucci Bag';
    loader.load(MODEL, (gltf)=>{
      const obj = gltf.scene;
      obj.scale.set(2,2,2);
      this.add(obj);
      
    });
  }
}