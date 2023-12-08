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
    first_name: string,
    last_name: string,
    username: string,
    address: string,
    contact: string,
    email: string,
    password: string,
  ) {
    console.log(
      first_name,
      last_name,
      username,
      address,
      contact,
      email,
      password,
    );
    return this.http.post('http://localhost:3000/auth/signup', {
      first_name: first_name,
      last_name: last_name,
      username: username,
      address: address,
      contact: contact,
      email: email,
      password: password,
    });
  }
}
