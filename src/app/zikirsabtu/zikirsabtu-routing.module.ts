import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZikirsabtuPage } from './zikirsabtu.page';

const routes: Routes = [
  {
    path: '',
    component: ZikirsabtuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZikirsabtuPageRoutingModule {}
