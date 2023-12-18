import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service';
import { IPopulatedDish } from '../../types/dish';
import { IDishCategory } from '../../types/category';

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
        console.log(this.dishes);
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}
