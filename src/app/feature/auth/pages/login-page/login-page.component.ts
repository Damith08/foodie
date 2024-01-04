import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/feature/auth/service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  step: number = 0;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  onClickContinue() {
    switch (this.step) {
      case 0:
        this.step = 1;
        break;

      case 1:
        // make an API call to check whether the email exists or not
        this.checkEmail();
        break;

      case 2:
        // make an API call to login the user
        this.loginUser();
        break;

      default:
        break;
    }
  }

  onClickForgotPassword() {
    //make forget password route
    this.router.navigate(['/auth/forgot-password']);
  }

  onLoadSignin() {
    this.router.navigate(['/auth/signup']);
  }

  private checkEmail() {
    const email = this.email.value;

    if (!email) {
      return;
    }

    this.authService.checkEmail(email).subscribe({
      next: () => {
        console.log(email);
        this.step = 2;
      },
      error: (err) => {
        console.log(err);
        alert('User does not exists');
      },
    });
  }

  private loginUser() {
    const email = this.email.value;
    const password = this.password.value;

    if (!email || !password) {
      return;
    }

    this.authService.login(email, password).subscribe({
      next: (res) => {
        const token = res.data.token;
        // save the token in local storage
        localStorage.setItem('token', token);
        this.router.navigate(['/menu']);
      },
      error: (err) => {
        alert('Invalid password');
      },
    });
  }
}
