import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDishCategory } from '../types/categories.types';
import { CommonResponse } from 'src/app/types/common.types';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CommonResponse<IDishCategory[]>> {
    const url = 'http://127.0.0.1:3000/dish-categories';
    return this.http.get<CommonResponse<IDishCategory[]>>(url);
  }
}
