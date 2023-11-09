import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  public user = { email: '' };
  model: any = {};
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  contactNumber = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  onSubmit(form: NgForm) {}
}
