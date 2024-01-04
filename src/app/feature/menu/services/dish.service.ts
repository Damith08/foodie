import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonResponse } from 'src/app/types/common.types';
import { Observable } from 'rxjs';
import { IPopulatedDish } from '../types/dishes.types';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private http: HttpClient) {}

  getAllDishes(): Observable<CommonResponse<IPopulatedDish[]>> {
    const url = 'http://127.0.0.1:3000/dishes';
    const headers = new HttpHeaders();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<CommonResponse<IPopulatedDish[]>>(url, { headers });
  }
}
