import { Group } from 'three';
import Model from './modelRender';


export default class Goose extends Group {
    constructor() {
      super();
  
      const model = new Model();
  
    
  
      this.add(model);
    }
  
    update(timeStamp) {
      this.rotation.y = timeStamp / 10000;
    }
  }