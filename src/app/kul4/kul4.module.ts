import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kul4PageRoutingModule } from './kul4-routing.module';

import { Kul4Page } from './kul4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kul4PageRoutingModule
  ],
  declarations: [Kul4Page]
})
export class Kul4PageModule {}
