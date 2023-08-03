import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  showLogin = true;

  constructor(private router: Router) {}

  onLoadSignin() {
    this.showLogin = false;
    // this.router.navigate(['/signup'], { skipLocationChange: true });
    // if(!this.showLogin) {
    //   return this.showSignup
  }

  onSubmit(form: NgForm) {
    console.log('form');
  }
}
