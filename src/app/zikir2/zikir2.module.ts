import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zikir2PageRoutingModule } from './zikir2-routing.module';

import { Zikir2Page } from './zikir2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zikir2PageRoutingModule
  ],
  declarations: [Zikir2Page]
})
export class Zikir2PageModule {}
