import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { IRestaurant } from '../../types/restaurant';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent implements OnInit {
  restaurants!: IRestaurant;
  isLoading = false;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.isLoading = true;
    this.restaurantService.getSingleRestaurant().subscribe({
      next: (res) => {
        this.restaurants = res.data;
        this.isLoading = false;
        console.log(this.restaurants);
        console.log(this.restaurants.tag);
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}
