import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Z2Page } from './z2.page';

const routes: Routes = [
  {
    path: '',
    component: Z2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Z2PageRoutingModule {}
