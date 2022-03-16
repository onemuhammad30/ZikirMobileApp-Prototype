import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZikirsabtuPageRoutingModule } from './zikirsabtu-routing.module';

import { ZikirsabtuPage } from './zikirsabtu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZikirsabtuPageRoutingModule
  ],
  declarations: [ZikirsabtuPage]
})
export class ZikirsabtuPageModule {}
