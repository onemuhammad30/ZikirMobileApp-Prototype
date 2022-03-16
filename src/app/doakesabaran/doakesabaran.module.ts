import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoakesabaranPageRoutingModule } from './doakesabaran-routing.module';

import { DoakesabaranPage } from './doakesabaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoakesabaranPageRoutingModule
  ],
  declarations: [DoakesabaranPage]
})
export class DoakesabaranPageModule {}
