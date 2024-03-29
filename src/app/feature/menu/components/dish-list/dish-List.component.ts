import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service';
import { IPopulatedDish } from '../../types/dishes.types';
import { ICategory, IDishCategory } from '../../types/categories.types';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss'],
})
export class DishListComponent implements OnInit {
  isLoading = false;
  dishes: IPopulatedDish[] = [];
  groupedDishes: {
    category: IDishCategory;
    dishes: IPopulatedDish[];
  }[] = [];

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.getAllDishes();
  }

  getAllDishes(): void {
    this.isLoading = true;
    this.dishService.getAllDishes().subscribe({
      next: (res) => {
        this.isLoading = false;
        this.dishes = res.data;
        // group the dishes according to the category
        const categorizedDishes: ICategory[] = [];
        this.dishes.forEach((dish) => {
          const foundIndex = categorizedDishes.findIndex(
            (item) => item.category._id === dish.dishCategory._id,
          );

          if (foundIndex > -1) {
            categorizedDishes[foundIndex].dishes.push(dish);
          }

          categorizedDishes.push({
            category: dish.dishCategory,
            dishes: [dish],
          });
        });

        this.groupedDishes = categorizedDishes;
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}
