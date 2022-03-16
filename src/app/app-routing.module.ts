import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'view-post',
    loadChildren: () => import('./view-post/view-post.module').then( m => m.ViewPostPageModule)
  },
  {
    path: 'edit-post/:id',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
},
  {
    path: 'zikir',
    loadChildren: () => import('./zikir/zikir.module').then( m => m.ZikirPageModule)
  },
  {
    path: 'zikir1',
    loadChildren: () => import('./zikir1/zikir1.module').then( m => m.Zikir1PageModule)
  },
  {
    path: 'count',
    loadChildren: () => import('./count/count.module').then( m => m.CountPageModule)
  },
  {
    path: 'zikir2',
    loadChildren: () => import('./zikir2/zikir2.module').then( m => m.Zikir2PageModule)
  },
  {
    path: 'selawat',
    loadChildren: () => import('./selawat/selawat.module').then( m => m.SelawatPageModule)
  },
  {
    path: 'zikir3',
    loadChildren: () => import('./zikir3/zikir3.module').then( m => m.Zikir3PageModule)
  },
  {
    path: 'doa',
    loadChildren: () => import('./doa/doa.module').then( m => m.DoaPageModule)
  },
  {
    path: 'doamain',
    loadChildren: () => import('./doamain/doamain.module').then( m => m.DoamainPageModule)
  },
  {
    path: 'selawat1',
    loadChildren: () => import('./selawat1/selawat1.module').then( m => m.Selawat1PageModule)
  },
  {
    path: 'almulk',
    loadChildren: () => import('./almulk/almulk.module').then( m => m.AlmulkPageModule)
  },
  {
    path: 'kul1',
    loadChildren: () => import('./kul1/kul1.module').then( m => m.Kul1PageModule)
  },
  {
    path: 'kul2',
    loadChildren: () => import('./kul2/kul2.module').then( m => m.Kul2PageModule)
  },
  {
    path: 'kul3',
    loadChildren: () => import('./kul3/kul3.module').then( m => m.Kul3PageModule)
  },
  {
    path: 'kul4',
    loadChildren: () => import('./kul4/kul4.module').then( m => m.Kul4PageModule)
  },
  {
    path: 'kursi',
    loadChildren: () => import('./kursi/kursi.module').then( m => m.KursiPageModule)
  },
  {
    path: 'zikirharian',
    loadChildren: () => import('./zikirharian/zikirharian.module').then( m => m.ZikirharianPageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
  },
  {
    path: 'view-note',
    loadChildren: () => import('./view-note/view-note.module').then( m => m.ViewNotePageModule)
  },
  {
    path: 'edit-note/:id',
    loadChildren: () => import('./edit-note/edit-note.module').then( m => m.EditNotePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'search1',
    loadChildren: () => import('./src/app/search/search1/search1.module').then( m => m.Search1PageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'doakeampunan',
    loadChildren: () => import('./doakeampunan/doakeampunan.module').then( m => m.DoakeampunanPageModule)
  },
  {
    path: 'doakebahagian',
    loadChildren: () => import('./doakebahagian/doakebahagian.module').then( m => m.DoakebahagianPageModule)
  },
  {
    path: 'doakesabaran',
    loadChildren: () => import('./doakesabaran/doakesabaran.module').then( m => m.DoakesabaranPageModule)
  },
  {
    path: 'doaketurunan',
    loadChildren: () => import('./doaketurunan/doaketurunan.module').then( m => m.DoaketurunanPageModule)
  },
  {
    path: 'doakeamanan',
    loadChildren: () => import('./doakeamanan/doakeamanan.module').then( m => m.DoakeamananPageModule)
  },
  {
    path: 'doaiman',
    loadChildren: () => import('./doaiman/doaiman.module').then( m => m.DoaimanPageModule)
  },
  {
    path: 'doaampunneraka',
    loadChildren: () => import('./doaampunneraka/doaampunneraka.module').then( m => m.DoaampunnerakaPageModule)
  },
  {
    path: 'doasiksa',
    loadChildren: () => import('./doasiksa/doasiksa.module').then( m => m.DoasiksaPageModule)
  },
  {
    path: 'doatetap',
    loadChildren: () => import('./doatetap/doatetap.module').then( m => m.DoatetapPageModule)
  },
  {
    path: 'zikirselasa',
    loadChildren: () => import('./zikirselasa/zikirselasa.module').then( m => m.ZikirselasaPageModule)
  },
  {
    path: 'zikirrabu',
    loadChildren: () => import('./zikirrabu/zikirrabu.module').then( m => m.ZikirrabuPageModule)
  },
  {
    path: 'zikirkhamis',
    loadChildren: () => import('./zikirkhamis/zikirkhamis.module').then( m => m.ZikirkhamisPageModule)
  },
  {
    path: 'zikirjumaat',
    loadChildren: () => import('./zikirjumaat/zikirjumaat.module').then( m => m.ZikirjumaatPageModule)
  },
  {
    path: 'zikirsabtu',
    loadChildren: () => import('./zikirsabtu/zikirsabtu.module').then( m => m.ZikirsabtuPageModule)
  },
  {
    path: 'zikirahad',
    loadChildren: () => import('./zikirahad/zikirahad.module').then( m => m.ZikirahadPageModule)
  },
  {
    path: 'z1',
    loadChildren: () => import('./z1/z1.module').then( m => m.Z1PageModule)
  },
  {
    path: 'z2',
    loadChildren: () => import('./z2/z2.module').then( m => m.Z2PageModule)
  },
  {
    path: 'z3',
    loadChildren: () => import('./z3/z3.module').then( m => m.Z3PageModule)
  },
  {
    path: 'z4',
    loadChildren: () => import('./z4/z4.module').then( m => m.Z4PageModule)
  },
  {
    path: 's1',
    loadChildren: () => import('./s1/s1.module').then( m => m.S1PageModule)
  },
  {
    path: 's2',
    loadChildren: () => import('./s2/s2.module').then( m => m.S2PageModule)
  },
  {
    path: 's3',
    loadChildren: () => import('./s3/s3.module').then( m => m.S3PageModule)
  },
  {
    path: 's4',
    loadChildren: () => import('./s4/s4.module').then( m => m.S4PageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
