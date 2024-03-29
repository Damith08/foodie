import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { IRestaurant } from '../../types/restaurants.types';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.scss'],
})
export class RestaurantInfoComponent implements OnInit {
  restaurant?: IRestaurant;
  isLoading = false;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.getRestaurant();
  }

  getRestaurant() {
    this.isLoading = true;
    this.restaurantService.getSingleRestaurant().subscribe({
      next: (res) => {
        this.restaurant = res.data;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}
