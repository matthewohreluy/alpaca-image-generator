import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlpacaComponent } from './alpaca/alpaca.component';
import { StylingComponent } from './styling/styling.component';
import { AccessoriesComponent } from './styling/accessories/accessories.component';
import { SubAccessoriesComponent } from './styling/sub-accessories/sub-accessories.component';
import { AlpacaImageComponent } from './alpaca/alpaca-image/alpaca-image.component';
import { AlpacaImageSetterDirective } from './shared/alpaca-image-setter.directive';

@NgModule({
  declarations: [
    AppComponent,
    AlpacaComponent,
    StylingComponent,
    AccessoriesComponent,
    SubAccessoriesComponent,
    AlpacaImageComponent,
    AlpacaImageSetterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
