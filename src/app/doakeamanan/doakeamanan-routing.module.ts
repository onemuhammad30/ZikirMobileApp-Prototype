import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoakeamananPage } from './doakeamanan.page';

const routes: Routes = [
  {
    path: '',
    component: DoakeamananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoakeamananPageRoutingModule {}
