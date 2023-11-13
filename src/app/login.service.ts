import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface LoginResponse {
  success: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  emailDetails(email: string, password: string): Observable<LoginResponse> {
    console.log(email, password);
    return this.http.post<LoginResponse>('http://localhost:3000/auth/login', {
      email: email,
      password: password,
    });
  }

  signinDetails(
    firstName: string,
    lastName: string,
    username: string,
    address: string,
    // contactNumber: number,
    email: string,
    password: string,
  ) {
    console.log(firstName, lastName, username, address, email, password);
    return this.http.post('http://localhost:3000/auth/signup', {
      firstName: firstName,
      lastName: lastName,
      username: username,
      address: address,
      // contactNumber: contactNumber,
      email: email,
      password: password,
    });
  }
}
