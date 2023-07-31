import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})

// showSignup: false;
export class LoginPageComponent {
  showLogin = true;
  showSignup = false;

  constructor(private router: Router) {}

  onLoadSignin() {
    this.showLogin = false;
    this.showSignup = true;
    // this.router.navigate(['/signup'], { skipLocationChange: true });
    // if(!this.showLogin) {
    //   return this.showSignup
  }

  onSubmit(form: NgForm) {
    console.log('form');
  }
}
