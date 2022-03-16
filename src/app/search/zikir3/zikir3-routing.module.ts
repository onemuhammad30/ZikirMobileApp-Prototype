import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zikir3Page } from './zikir3.page';

const routes: Routes = [
  {
    path: '',
    component: Zikir3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zikir3PageRoutingModule {}
