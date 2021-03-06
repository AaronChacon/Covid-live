import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full'
      },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'country', loadChildren: () => import('./country/country.module').then(m => m.CountryModule) }
    ]
  },
  {
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full'
  }
  /* {
    path: '**', 
    loadChildren: () => import('.').then(m => m.PageNotFountModule),
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',  
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
