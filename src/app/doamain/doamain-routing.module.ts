import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoamainPage } from './doamain.page';

const routes: Routes = [
  {
    path: '',
    component: DoamainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoamainPageRoutingModule {}
