import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  showLogin = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


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
