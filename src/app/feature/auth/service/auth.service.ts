import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IEmailCheckRequest,
  ILoginRequest,
  ILoginResponse,
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
}
