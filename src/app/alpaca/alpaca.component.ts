import { AccessoryService } from './../shared/accessory.service';
import { Accessories } from './../shared/accessories.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alpaca',
  templateUrl: './alpaca.component.html',
  styleUrls: ['./alpaca.component.css']
})
export class AlpacaComponent implements OnInit {
  accessories: Accessories[];
  chosenAccessories;
  constructor(private accessoryService: AccessoryService) { }

  ngOnInit(): void {
    this.accessories = this.accessoryService.accessories;
    this.chosenAccessories = this.accessoryService.chosenAccessories;
  }

  randomize(){
    this.accessoryService.randomize();
  }
}
