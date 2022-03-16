import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZikirkhamisPageRoutingModule } from './zikirkhamis-routing.module';

import { ZikirkhamisPage } from './zikirkhamis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZikirkhamisPageRoutingModule
  ],
  declarations: [ZikirkhamisPage]
})
export class ZikirkhamisPageModule {}
