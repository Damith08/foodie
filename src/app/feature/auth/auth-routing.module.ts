import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from 'src/app/feature/auth/pages/login-page/login-page.component';
import { SignupPageComponent } from 'src/app/feature/auth/pages/signup-page/signup-page.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '', // localhost:4200/auth
    component: LoginPageComponent,
  },
  {
    path: 'login', // localhost:4200/auth/login
    component: LoginPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'signup', // localhost:4200/auth/signup
    component: SignupPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
