import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelawatPage } from './selawat.page';

const routes: Routes = [
  {
    path: '',
    component: SelawatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelawatPageRoutingModule {}
