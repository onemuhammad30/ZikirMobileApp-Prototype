import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoakesabaranPage } from './doakesabaran.page';

const routes: Routes = [
  {
    path: '',
    component: DoakesabaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoakesabaranPageRoutingModule {}
