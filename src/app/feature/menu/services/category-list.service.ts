import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDishCategory } from '../types/category';
import { CommonResponse } from 'src/app/types/common.types';

@Injectable({
  providedIn: 'root',
})
export class CategoryListService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CommonResponse<IDishCategory[]>> {
    const url = 'http://127.0.0.1:3000/dish-categories';
    return this.http.get<CommonResponse<IDishCategory[]>>(url);
  }
}
