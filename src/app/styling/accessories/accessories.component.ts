import { Accessories } from './../../shared/accessories.interface';
import { AccessoryService } from './../../shared/accessory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  accessories:Accessories[];
  currentAccessory: string = 'Accessories';
  constructor(private accessoryService: AccessoryService) { }

  ngOnInit(): void {
   this.accessories =  this.accessoryService.accessories;

    //  initialize
    this.currentAccessory = this.accessoryService.accessories[0].category;
    this.accessoryService.chosenAccessory.emit(this.accessoryService.accessories[0]);
  }

  chooseAccessory(accessory):void {
    this.accessoryService.chosenAccessory.emit(accessory);
    this.currentAccessory = accessory.category;
  }

  accessoryChecker(value1, value2){
    return this.accessoryService.accessoryChecker(value1, value2);
  }  
}
