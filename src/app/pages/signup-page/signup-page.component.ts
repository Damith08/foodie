import { Component } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  // public user = { email: '' };

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  contactNumber = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  onSubmit(form: NgForm) {}

  signinUser() {
    const first_name = this.firstName.value;
    const last_name = this.lastName.value;
    const username = this.username.value;
    const address = this.address.value;
    const contact_number = this.contactNumber.value;
    const email = this.email.value;
    const password = this.password.value;

    if (
      !first_name ||
      !last_name ||
      !username ||
      !address ||
      !contact_number ||
      !email ||
      !password
    ) {
      return;
    }
    this.loginService
      .signinDetails(
        first_name,
        last_name,
        username,
        address,
        contact_number,
        email,
        password,
      )
      .subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          this.router.navigate(['/menu']);
        } else {
          alert('User registration failed');
        }
      });
  }
}
