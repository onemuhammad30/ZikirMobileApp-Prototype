import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Z4PageRoutingModule } from './z4-routing.module';

import { Z4Page } from './z4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Z4PageRoutingModule
  ],
  declarations: [Z4Page]
})
export class Z4PageModule {}
