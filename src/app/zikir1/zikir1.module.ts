import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zikir1PageRoutingModule } from './zikir1-routing.module';

import { Zikir1Page } from './zikir1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zikir1PageRoutingModule
  ],
  declarations: [Zikir1Page]
})
export class Zikir1PageModule {}
