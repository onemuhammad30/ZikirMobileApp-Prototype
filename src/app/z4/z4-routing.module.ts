import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Z4Page } from './z4.page';

const routes: Routes = [
  {
    path: '',
    component: Z4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Z4PageRoutingModule {}
