import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/types/common.types';
import { Register } from './register';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  signupDetails(): Observable<CommonResponse<Register[]>> {
    const url = 'http://127.0.0.1:3000/auth/signup';
    return this.http.post<CommonResponse<Register[]>>(url);
  }
}
