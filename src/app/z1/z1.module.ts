import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Z1PageRoutingModule } from './z1-routing.module';

import { Z1Page } from './z1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Z1PageRoutingModule
  ],
  declarations: [Z1Page]
})
export class Z1PageModule {}
