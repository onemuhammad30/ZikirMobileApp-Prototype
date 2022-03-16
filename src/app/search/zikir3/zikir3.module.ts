import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zikir3PageRoutingModule } from './zikir3-routing.module';

import { Zikir3Page } from './zikir3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zikir3PageRoutingModule
  ],
  declarations: [Zikir3Page]
})
export class Zikir3PageModule {}
