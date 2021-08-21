import { AccessoryService } from './accessory.service';
import { Directive, HostBinding, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appAlpacaImageSetter]'
})
export class AlpacaImageSetterDirective implements OnInit, OnChanges {
  @HostBinding('style.background') background: string;
  @Input() accessory: {category: string, chosenAccessory: string};
  constructor(private accessoryService: AccessoryService) { }

  ngOnInit(){
    
  }

  ngOnChanges(){

    this.background = this.accessoryService.constructCSSBackground(this.accessory);
  }
}
