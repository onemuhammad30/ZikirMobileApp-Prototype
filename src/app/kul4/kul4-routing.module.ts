import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kul4Page } from './kul4.page';

const routes: Routes = [
  {
    path: '',
    component: Kul4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kul4PageRoutingModule {}
