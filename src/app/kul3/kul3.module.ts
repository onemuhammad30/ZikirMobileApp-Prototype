import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kul3PageRoutingModule } from './kul3-routing.module';

import { Kul3Page } from './kul3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kul3PageRoutingModule
  ],
  declarations: [Kul3Page]
})
export class Kul3PageModule {}
