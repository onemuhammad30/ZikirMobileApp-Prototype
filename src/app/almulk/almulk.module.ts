import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlmulkPageRoutingModule } from './almulk-routing.module';

import { AlmulkPage } from './almulk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlmulkPageRoutingModule
  ],
  declarations: [AlmulkPage]
})
export class AlmulkPageModule {}
