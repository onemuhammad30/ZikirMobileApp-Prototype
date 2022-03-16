import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZikirahadPage } from './zikirahad.page';

const routes: Routes = [
  {
    path: '',
    component: ZikirahadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZikirahadPageRoutingModule {}
