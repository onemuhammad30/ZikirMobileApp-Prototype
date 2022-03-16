import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaimanPageRoutingModule } from './doaiman-routing.module';

import { DoaimanPage } from './doaiman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaimanPageRoutingModule
  ],
  declarations: [DoaimanPage]
})
export class DoaimanPageModule {}
