import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../service/signup.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  contact = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private signupService: SignupService,
  ) {}

  //

  signupUser() {
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const username = this.username.value;
    const address = this.address.value;
    const contact = this.contact.value;
    const email = this.email.value;
    const password = this.password.value;

    if (
      !firstName ||
      !lastName ||
      !username ||
      !address ||
      !contact ||
      !email ||
      !password
    ) {
      return;
    }
    this.signupService
      .signinDetails(
        firstName,
        lastName,
        username,
        address,
        contact,
        email,
        password,
      )
      .subscribe({
        next: (res) => {
          this.router.navigate(['/menu']);
          const token = res.data.token;
          console.log(token);
        },
        error: (err) => {
          alert('User registration failed');
        },
      });
  }
}
