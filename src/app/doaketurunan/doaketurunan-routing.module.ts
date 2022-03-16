import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaketurunanPage } from './doaketurunan.page';

const routes: Routes = [
  {
    path: '',
    component: DoaketurunanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaketurunanPageRoutingModule {}
