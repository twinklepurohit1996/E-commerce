import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { GuardsService } from './guards/auth-guards.guard';

const routes: Routes =[
 {path:'',component:LoginComponent}, 
  {
    path: 'home',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
  , {
    path: '',
    component: AdminLayoutComponent,canActivate : [GuardsService],
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true,preloadingStrategy:PreloadAllModules
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
