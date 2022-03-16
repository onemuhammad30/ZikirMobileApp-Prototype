import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Selawat1PageRoutingModule } from './selawat1-routing.module';

import { Selawat1Page } from './selawat1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Selawat1PageRoutingModule
  ],
  declarations: [Selawat1Page]
})
export class Selawat1PageModule {}
