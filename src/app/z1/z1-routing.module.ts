import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Z1Page } from './z1.page';

const routes: Routes = [
  {
    path: '',
    component: Z1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Z1PageRoutingModule {}
