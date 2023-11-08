import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  emailDetails(email: string, password: string) {
    console.log(email, password);
    return this.http.post('http://localhost:3000/auth/login', {
      email: email,
      password: password,
    });
  }
}
