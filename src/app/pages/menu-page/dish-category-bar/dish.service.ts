import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonResponse } from 'src/app/types/common.types';
import { Dish } from './dish';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private http: HttpClient) {}

  getDishList(): Observable<CommonResponse<Dish[]>> {
    const url = 'http://127.0.0.1:3000/dishes';
    return this.http.get<CommonResponse<Dish[]>>(url);
  }
}
