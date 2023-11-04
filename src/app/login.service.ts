import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getUserDetails(email: string, password: string) {
    return this.http.get('http://localhost:3000/auth/login');
  }
}
