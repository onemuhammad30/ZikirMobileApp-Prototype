import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoatetapPage } from './doatetap.page';

const routes: Routes = [
  {
    path: '',
    component: DoatetapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoatetapPageRoutingModule {}
