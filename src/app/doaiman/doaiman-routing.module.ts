import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaimanPage } from './doaiman.page';

const routes: Routes = [
  {
    path: '',
    component: DoaimanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaimanPageRoutingModule {}
