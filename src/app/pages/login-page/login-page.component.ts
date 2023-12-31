import { Component } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Subscription } from 'rxjs';

interface LoginResponse {
  success: boolean;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  showLogin = true;
  showEmailField = true;
  showPasswordField = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  onLoadSignin() {
    this.showLogin = false;
    this.showEmailField = true;
  }

  // Check the email before showing the password
  onContinue() {
    if (this.email.valid) {
      this.showEmailField = false;
      this.showPasswordField = true;
    }
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
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.loginService
      .emailDetails(email, password)
      .subscribe((res: LoginResponse) => {
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
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
