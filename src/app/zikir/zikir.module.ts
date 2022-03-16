import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZikirPageRoutingModule } from './zikir-routing.module';

import { ZikirPage } from './zikir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZikirPageRoutingModule
  ],
  declarations: [ZikirPage]
})
export class ZikirPageModule {}
