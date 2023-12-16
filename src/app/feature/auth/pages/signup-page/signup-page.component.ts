import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  userRegisterForm;
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  address: string = '';
  contact: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private signupService: SignupService,
  ) {
    this.userRegisterForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  //

  onSubmit() {
    this.signupService
      .signinDetails(this.userRegisterForm.value)
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
