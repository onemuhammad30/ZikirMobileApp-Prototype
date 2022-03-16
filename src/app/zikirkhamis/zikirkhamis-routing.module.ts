import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZikirkhamisPage } from './zikirkhamis.page';

const routes: Routes = [
  {
    path: '',
    component: ZikirkhamisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZikirkhamisPageRoutingModule {}
