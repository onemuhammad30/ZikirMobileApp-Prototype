import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KursiPageRoutingModule } from './kursi-routing.module';

import { KursiPage } from './kursi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KursiPageRoutingModule
  ],
  declarations: [KursiPage]
})
export class KursiPageModule {}
