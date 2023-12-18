import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonResponse } from 'src/app/types/common.types';
import { Observable } from 'rxjs';
import { IPopulatedDish } from '../types/dish';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private http: HttpClient) {}

  getAllDishes(): Observable<CommonResponse<IPopulatedDish[]>> {
    const url = 'http://127.0.0.1:3000/dishes';
    return this.http.get<CommonResponse<IPopulatedDish[]>>(url);
  }
}
