import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/feature/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'signup',
    loadChildren: () =>
      import('../app/feature/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'menu', component: MenuPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
