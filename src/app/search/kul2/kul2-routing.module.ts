import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kul2Page } from './kul2.page';

const routes: Routes = [
  {
    path: '',
    component: Kul2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kul2PageRoutingModule {}
