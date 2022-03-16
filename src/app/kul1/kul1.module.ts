import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kul1PageRoutingModule } from './kul1-routing.module';

import { Kul1Page } from './kul1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kul1PageRoutingModule
  ],
  declarations: [Kul1Page]
})
export class Kul1PageModule {}
