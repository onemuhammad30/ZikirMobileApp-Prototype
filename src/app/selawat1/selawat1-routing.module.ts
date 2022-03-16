import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Selawat1Page } from './selawat1.page';

const routes: Routes = [
  {
    path: '',
    component: Selawat1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Selawat1PageRoutingModule {}
