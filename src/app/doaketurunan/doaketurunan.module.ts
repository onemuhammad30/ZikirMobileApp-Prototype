import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaketurunanPageRoutingModule } from './doaketurunan-routing.module';

import { DoaketurunanPage } from './doaketurunan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaketurunanPageRoutingModule
  ],
  declarations: [DoaketurunanPage]
})
export class DoaketurunanPageModule {}
