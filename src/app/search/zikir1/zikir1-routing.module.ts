import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zikir1Page } from './zikir1.page';

const routes: Routes = [
  {
    path: '',
    component: Zikir1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zikir1PageRoutingModule {}
