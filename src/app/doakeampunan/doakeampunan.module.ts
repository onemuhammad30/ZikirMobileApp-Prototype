import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoakeampunanPageRoutingModule } from './doakeampunan-routing.module';

import { DoakeampunanPage } from './doakeampunan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoakeampunanPageRoutingModule
  ],
  declarations: [DoakeampunanPage]
})
export class DoakeampunanPageModule {}
