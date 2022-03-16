import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaampunnerakaPage } from './doaampunneraka.page';

const routes: Routes = [
  {
    path: '',
    component: DoaampunnerakaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaampunnerakaPageRoutingModule {}
