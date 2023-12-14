import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { Dish } from '../dish';

@Component({
  selector: 'app-bento-series',
  templateUrl: './bento-series.component.html',
  styleUrls: ['./bento-series.component.scss'],
})
export class BentoSeriesComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.dishService.getDishList().subscribe({
      next: (res) => {
        this.dishes = res.data;
        console.log(this.dishes);
      },
      error: () => {},
    });
  }
}
