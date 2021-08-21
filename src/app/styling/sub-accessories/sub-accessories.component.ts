import { AccessoryService } from './../../shared/accessory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-accessories',
  templateUrl: './sub-accessories.component.html',
  styleUrls: ['./sub-accessories.component.css']
})
export class SubAccessoriesComponent implements OnInit {
  subAccessories:[] = [];
  category: string;
  chosenAccessories:{};
  constructor(private accessoryService: AccessoryService) {
    this.accessoryService.chosenAccessory.subscribe((accessory)=>{
      this.category = accessory.category;
      this.subAccessories = accessory.styles;
    })
   }

  ngOnInit(): void {
    this.chosenAccessories = this.accessoryService.chosenAccessories;
  }

  chooseSubAccessory(accessory){
    this.accessoryService.updateChosenAccessory(accessory,this.category.toLowerCase());
    // update image
  }

  accessoryChecker(accessory){
    return this.accessoryService.accessoryChecker(accessory, this.chosenAccessories[this.category.toLowerCase()])
  }
}
