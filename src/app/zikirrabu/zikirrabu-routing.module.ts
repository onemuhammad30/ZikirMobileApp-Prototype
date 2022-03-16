import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZikirrabuPage } from './zikirrabu.page';

const routes: Routes = [
  {
    path: '',
    component: ZikirrabuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZikirrabuPageRoutingModule {}
