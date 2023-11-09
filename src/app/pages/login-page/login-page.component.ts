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
  showEmailField = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  onLoadSignin() {
    this.showLogin = false;
  }

  onSubmit(form: NgForm) {
    console.log('form');
  }

  loginUser() {
    const email = this.email.value;
    const password = this.password.value;

    if (!email || !password) {
      return;
    }

    this.loginService.emailDetails(email, password).subscribe((res: any) => {
      console.log(res);

      if (res.success) {
        this.router.navigate(['/menu']);
      } else {
        alert('Invalid username or password');
      }
    });
  }
  loadSigninPage() {
    this.router.navigate(['/signup']);
  }
}

// step = 0

// password field -> ngIf -> step === 1

// (click)=onClickContinue()

// onContinue ->

// step === 0 or not

// step === 0  -> loginService.checkEmail() -> response -> user exists or not -> userExists = true/false

// if userExists === true -> step = 1

// if userExists === false -> step = 2
