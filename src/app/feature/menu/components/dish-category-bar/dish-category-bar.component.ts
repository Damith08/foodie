import { Component, OnInit } from '@angular/core';
import { CategoryListService } from '../../services/category-list.service';
import { IDishCategory } from '../../types/category';

@Component({
  selector: 'app-dish-category-bar',
  templateUrl: './dish-category-bar.component.html',
  styleUrls: ['./dish-category-bar.component.scss'],
})
export class DishCategoryBarComponent implements OnInit {
  categories: IDishCategory[] = [];
  isLoading = false;

  constructor(private categoryService: CategoryListService) {}

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.isLoading = true;
    this.categoryService.getAllCategories().subscribe({
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
