import { Component, OnInit } from '@angular/core';
import { CategoryListService } from '../category-list.service';
import { Observable } from 'rxjs';
import { Category } from './category';

@Component({
  selector: 'app-dish-category-bar',
  templateUrl: './dish-category-bar.component.html',
  styleUrls: ['./dish-category-bar.component.scss'],
})
export class DishCategoryBarComponent implements OnInit {
  category!: Observable<Category[]>;

  constructor(private categoryService: CategoryListService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.category = this.categoryService.getCategoryList();
  }
}
