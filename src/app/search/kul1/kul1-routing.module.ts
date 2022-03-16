import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kul1Page } from './kul1.page';

const routes: Routes = [
  {
    path: '',
    component: Kul1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kul1PageRoutingModule {}
