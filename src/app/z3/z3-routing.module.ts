import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Z3Page } from './z3.page';

const routes: Routes = [
  {
    path: '',
    component: Z3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Z3PageRoutingModule {}
