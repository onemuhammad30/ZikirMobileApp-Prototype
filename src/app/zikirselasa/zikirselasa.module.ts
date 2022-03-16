import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZikirselasaPageRoutingModule } from './zikirselasa-routing.module';

import { ZikirselasaPage } from './zikirselasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZikirselasaPageRoutingModule
  ],
  declarations: [ZikirselasaPage]
})
export class ZikirselasaPageModule {}
