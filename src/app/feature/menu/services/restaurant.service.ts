import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/types/common.types';
import { IRestaurant } from '../types/restaurants.types';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getSingleRestaurant(): Observable<CommonResponse<IRestaurant>> {
    const url = 'http://127.0.0.1:3000/restaurants/657951124dd52263fd878db6';
    return this.http.get<CommonResponse<IRestaurant>>(url);
  }
}
