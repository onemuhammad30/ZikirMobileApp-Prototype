import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoakeamananPageRoutingModule } from './doakeamanan-routing.module';

import { DoakeamananPage } from './doakeamanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoakeamananPageRoutingModule
  ],
  declarations: [DoakeamananPage]
})
export class DoakeamananPageModule {}
