import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoasiksaPage } from './doasiksa.page';

const routes: Routes = [
  {
    path: '',
    component: DoasiksaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoasiksaPageRoutingModule {}
