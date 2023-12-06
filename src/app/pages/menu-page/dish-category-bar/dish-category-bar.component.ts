import { Component, OnInit } from '@angular/core';
import { CategoryListService } from '../category-list.service';
import { Category } from './category';

@Component({
  selector: 'app-dish-category-bar',
  templateUrl: './dish-category-bar.component.html',
  styleUrls: ['./dish-category-bar.component.scss'],
})
export class DishCategoryBarComponent implements OnInit {
  categories: Category[] = [];
  isLoading = false;

  constructor(private categoryService: CategoryListService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.isLoading = true;
    this.categoryService.getCategoryList().subscribe({
      next: (res) => {
        this.categories = res.data;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}
