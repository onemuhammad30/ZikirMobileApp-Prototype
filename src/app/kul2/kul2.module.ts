import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kul2PageRoutingModule } from './kul2-routing.module';

import { Kul2Page } from './kul2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kul2PageRoutingModule
  ],
  declarations: [Kul2Page]
})
export class Kul2PageModule {}
