import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoakeampunanPage } from './doakeampunan.page';

const routes: Routes = [
  {
    path: '',
    component: DoakeampunanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoakeampunanPageRoutingModule {}
