import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

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
  {
    path: 'menu',
    loadChildren: () =>
      import('../app/feature/menu/menu.module').then((m) => m.MenuModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
