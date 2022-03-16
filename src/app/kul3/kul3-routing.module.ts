import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kul3Page } from './kul3.page';

const routes: Routes = [
  {
    path: '',
    component: Kul3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kul3PageRoutingModule {}
