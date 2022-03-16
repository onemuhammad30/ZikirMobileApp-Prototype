import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZikirharianPage } from './zikirharian.page';

const routes: Routes = [
  {
    path: '',
    component: ZikirharianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZikirharianPageRoutingModule {}
