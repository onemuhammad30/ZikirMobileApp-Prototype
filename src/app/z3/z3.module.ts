import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Z3PageRoutingModule } from './z3-routing.module';

import { Z3Page } from './z3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Z3PageRoutingModule
  ],
  declarations: [Z3Page]
})
export class Z3PageModule {}
