import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZikirjumaatPageRoutingModule } from './zikirjumaat-routing.module';

import { ZikirjumaatPage } from './zikirjumaat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZikirjumaatPageRoutingModule
  ],
  declarations: [ZikirjumaatPage]
})
export class ZikirjumaatPageModule {}
