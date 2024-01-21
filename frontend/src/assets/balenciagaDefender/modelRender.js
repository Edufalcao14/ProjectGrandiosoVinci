/* eslint-disable import/extensions */
import { Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import MODEL from './defender.glb';

export default class Hoodie extends Object3D {
  constructor() {
    const loader = new GLTFLoader();
    
    super();
   
    this.name = 'Balenciaga Hoodie';
    loader.load(MODEL, (gltf)=>{
      const obj = gltf.scene;
      obj.scale.set(15,15,15);
      
      this.add(obj);
      
    });
  }
}