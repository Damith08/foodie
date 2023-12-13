import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent implements OnInit {
  restaurants!: Restaurant;
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
