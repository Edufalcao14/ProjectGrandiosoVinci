import { Group } from 'three';
import Racerwatch from './modelRender';


export default class sceneCutioVolareWatch extends Group {
    constructor() {
      super();
  
      const race = new Racerwatch();
  
      this.add(race);
    }
  
    update(timeStamp) {
      this.rotation.y = timeStamp / 10000;
    }
  }