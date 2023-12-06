import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './dish-category-bar/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryListService {
  private categoryListUrl = 'http://127.0.0.1:3000/dish-categories';

  constructor(private http: HttpClient) {}

  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryListUrl);
  }
}
