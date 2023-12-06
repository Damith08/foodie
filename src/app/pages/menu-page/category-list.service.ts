import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './dish-category-bar/category';
import { CommonResponse } from 'src/app/types/common.types';

@Injectable({
  providedIn: 'root',
})
export class CategoryListService {
  constructor(private http: HttpClient) {}

  getCategoryList(): Observable<CommonResponse<Category[]>> {
    const url = 'http://127.0.0.1:3000/dish-categories';
    return this.http.get<CommonResponse<Category[]>>(url);
  }
}
