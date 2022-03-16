import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KursiPage } from './kursi.page';

const routes: Routes = [
  {
    path: '',
    component: KursiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KursiPageRoutingModule {}
