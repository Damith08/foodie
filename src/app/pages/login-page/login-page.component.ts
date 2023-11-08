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

  model: any = {};
  getData: boolean = true;

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

    this.loginService.emailDetails(email, password).subscribe((res: any) => {
      console.log(res);
      this.getData = res;

      if (res.success) {
        this.router.navigate(['/menu']);
      } else {
        alert('Invalid username or password');
      }
    });
  }
}
