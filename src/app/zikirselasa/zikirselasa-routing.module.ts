import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZikirselasaPage } from './zikirselasa.page';

const routes: Routes = [
  {
    path: '',
    component: ZikirselasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZikirselasaPageRoutingModule {}
