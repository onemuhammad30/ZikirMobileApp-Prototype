import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZikirjumaatPage } from './zikirjumaat.page';

const routes: Routes = [
  {
    path: '',
    component: ZikirjumaatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZikirjumaatPageRoutingModule {}
