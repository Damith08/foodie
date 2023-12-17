import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/types/common.types';
import { ISignupRequest, ISignupResponse } from '../types/signup';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

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
