import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZikirharianPageRoutingModule } from './zikirharian-routing.module';

import { ZikirharianPage } from './zikirharian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZikirharianPageRoutingModule
  ],
  declarations: [ZikirharianPage]
})
export class ZikirharianPageModule {}
