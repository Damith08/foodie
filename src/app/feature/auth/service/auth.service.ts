import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IEmailCheckRequest,
  ILoginRequest,
  ILoginResponse,
  ISignupRequest,
  ISignupResponse,
} from '../types/auth.types';
import { CommonResponse } from 'src/app/types/common.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  checkEmail(email: string) {
    const body: IEmailCheckRequest = {
      email: email,
    };

    return this.http.post('http://localhost:3000/auth/check-email', body);
  }

  login(
    email: string,
    password: string,
  ): Observable<CommonResponse<ILoginResponse>> {
    const body: ILoginRequest = {
      email: email,
      password: password,
    };

    return this.http.post<CommonResponse<ILoginResponse>>(
      'http://localhost:3000/auth/login',
      body,
    );
  }

  signinDetails(
    firstName: string,
    lastName: string,
    username: string,
    address: string,
    contact: string,
    email: string,
    password: string,
  ): Observable<CommonResponse<ISignupResponse>> {
    const body: ISignupRequest = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      address: address,
      contact: contact,
      email: email,
      password: password,
    };
    console.log(body);
    return this.http.post<CommonResponse<ISignupResponse>>(
      'http://localhost:3000/auth/signup',
      body,
    );
  }
}
