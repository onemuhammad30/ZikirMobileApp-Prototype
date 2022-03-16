import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlmulkPage } from './almulk.page';

const routes: Routes = [
  {
    path: '',
    component: AlmulkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlmulkPageRoutingModule {}
