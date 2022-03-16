import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  },
  {
    path: 'zikir3',
    loadChildren: () => import('./zikir3/zikir3.module').then( m => m.Zikir3PageModule)
  },
  {
    path: 'zikir1',
    loadChildren: () => import('./zikir1/zikir1.module').then( m => m.Zikir1PageModule)
  },
  {
    path: 'kul1',
    loadChildren: () => import('./kul1/kul1.module').then( m => m.Kul1PageModule)
  },
  {
    path: 'kul2',
    loadChildren: () => import('./kul2/kul2.module').then( m => m.Kul2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
