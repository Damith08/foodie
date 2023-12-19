import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service';
import { IPopulatedDish } from '../../types/dishes.types';
import { IDishCategory } from '../../types/categories.types';

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
  }[] = [
    {
      category: { name: 'drinks' },
      dishes: [
        {
          name: 'pizza',
          description: 'fhhhlhaklfj',
          price: 121,
          image: 'sachjgsj',
          dishCategory: { name: 'drinks' },
          restaurant: 'klasdjfkl',
        },
      ],
    },
  ];

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
        // TODO:group the dishes according to the category
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}
