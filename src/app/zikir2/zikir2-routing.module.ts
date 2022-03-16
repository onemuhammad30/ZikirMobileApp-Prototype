import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zikir2Page } from './zikir2.page';

const routes: Routes = [
  {
    path: '',
    component: Zikir2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zikir2PageRoutingModule {}
