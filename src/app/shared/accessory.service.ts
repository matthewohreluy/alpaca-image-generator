import { ACCESSORIES } from './accessories.constants';
import { Accessories } from './accessories.interface';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessoryService {
  accessories:Accessories[] = ACCESSORIES;
  chosenAccessory = new EventEmitter<{}>();
  chosenAccessories ={
    hair: 'Default',
    ears: 'Default',
    eyes: 'Default',
    mouth: 'Default',
    neck: 'Default',
    leg: 'Default',
    accessories: 'Earings',
    background: 'Blue',
    nose: 'Default'
  }
  constructor() { }

  updateChosenAccessory(accessory, category){
    this.chosenAccessories[category] = accessory;
  }

  constructCSSBackground(accessory){
    // accessory: {category, chosenAccessory}
    // make all lowercase
    var category = accessory.category.toLowerCase();
    var chosenAccessory = accessory.chosenAccessory.toLowerCase().replace(' ','-');
    // create path
    return `url('../../assets/alpaca/${category}/${chosenAccessory}.png') center center/cover`;
  }

  accessoryChecker(value1, value2){
    return value1 === value2;
  }

  randomize(){
    this.accessories.forEach((element)=>{
      this.chosenAccessories[element.category.toLowerCase()] = element.styles[Math.floor(Math.random()*element.styles.length)];
    })
  }
}
