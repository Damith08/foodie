import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupPageComponent } from '../signup-page/signup-page.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  isLogin() {
    this.router.navigate([SignupPageComponent]);
  }
}
