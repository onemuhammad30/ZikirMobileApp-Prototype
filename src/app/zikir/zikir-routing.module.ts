import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZikirPage } from './zikir.page';

const routes: Routes = [
  {
    path: '',
    component: ZikirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZikirPageRoutingModule {}
