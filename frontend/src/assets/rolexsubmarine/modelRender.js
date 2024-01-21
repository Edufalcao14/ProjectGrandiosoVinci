/* eslint-disable import/extensions */
import { Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import MODEL from './model.glb';

export default class RacerWatch extends Object3D {
  constructor() {
    const loader = new GLTFLoader();
    
    super();
   
    this.name = 'Rolex Watch';

    loader.load(MODEL, (gltf)=>{
      const test = gltf.scene.children[0];
      test.scale.set(1.8,1.8,1.8);
      this.add(test);
      
    });
  }
}