import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  showLogin = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  model: any = {};
  getData: boolean = false;

  onLoadSignin() {
    this.showLogin = false;
    // this.router.navigate(['/signup'], { skipLocationChange: true });
    // if(!this.showLogin) {
    //   return this.showSignup
  }

  onSubmit(form: NgForm) {
    console.log('form');
  }

  loginUser() {
    let email = this.model.email;
    let password = this.model.password;
    console.log(email + ' ' + password);

    this.loginService.getUserDetails(email, password).subscribe((res: any) => {
      this.getData = res;

      if (this.getData == true) {
        this.router.navigate(['/menu/']);
      } else {
        alert('Invalid username or password');
      }
    });
  }
}
