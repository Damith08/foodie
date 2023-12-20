import { Component, OnInit } from '@angular/core';

import { IDishCategory } from '../../types/categories.types';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-dish-category-bar',
  templateUrl: './dish-category-bar.component.html',
  styleUrls: ['./dish-category-bar.component.scss'],
})
export class DishCategoryBarComponent implements OnInit {
  categories: IDishCategory[] = [];
  isLoading = false;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.isLoading = true;
    this.categoriesService.getAllCategories().subscribe({
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
