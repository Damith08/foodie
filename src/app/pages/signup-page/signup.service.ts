import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface LoginResponse {
  success: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  signinDetails(details: any) {
    return this.http.post<LoginResponse>('http://localhost:3000/auth/signup', {
      first_name: details.firstName,
      last_name: details.lastName,
      username: details.username,
      address: details.address,
      contact: details.contact,
      email: details.email,
      password: details.password,
    });
  }
}
