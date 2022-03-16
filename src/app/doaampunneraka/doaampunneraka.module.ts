import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaampunnerakaPageRoutingModule } from './doaampunneraka-routing.module';

import { DoaampunnerakaPage } from './doaampunneraka.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaampunnerakaPageRoutingModule
  ],
  declarations: [DoaampunnerakaPage]
})
export class DoaampunnerakaPageModule {}
