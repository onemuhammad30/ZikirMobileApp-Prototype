import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelawatPageRoutingModule } from './selawat-routing.module';

import { SelawatPage } from './selawat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelawatPageRoutingModule
  ],
  declarations: [SelawatPage]
})
export class SelawatPageModule {}
