import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Z2PageRoutingModule } from './z2-routing.module';

import { Z2Page } from './z2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Z2PageRoutingModule
  ],
  declarations: [Z2Page]
})
export class Z2PageModule {}
