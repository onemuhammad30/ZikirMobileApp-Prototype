import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZikirahadPageRoutingModule } from './zikirahad-routing.module';

import { ZikirahadPage } from './zikirahad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZikirahadPageRoutingModule
  ],
  declarations: [ZikirahadPage]
})
export class ZikirahadPageModule {}
