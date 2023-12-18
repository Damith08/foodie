import { Component, Input } from '@angular/core';
import { IDishCategory } from '../../types/category';
import { IPopulatedDish } from '../../types/dish';

@Component({
  selector: 'app-dish-category-section',
  templateUrl: './dish-category-section.component.html',
  styleUrls: ['./dish-category-section.component.scss'],
})
export class DishCategorySectionComponent {
  @Input() category?: IDishCategory;
  @Input() dishes: IPopulatedDish[] = [];
}
