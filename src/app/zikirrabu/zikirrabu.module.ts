import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZikirrabuPageRoutingModule } from './zikirrabu-routing.module';

import { ZikirrabuPage } from './zikirrabu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZikirrabuPageRoutingModule
  ],
  declarations: [ZikirrabuPage]
})
export class ZikirrabuPageModule {}
