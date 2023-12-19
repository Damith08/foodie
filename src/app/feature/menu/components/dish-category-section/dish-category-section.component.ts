import { Component, Input } from '@angular/core';
import { IDishCategory } from '../../types/categories.types';
import { IPopulatedDish } from '../../types/dishes.types';

@Component({
  selector: 'app-dish-category-section',
  templateUrl: './dish-category-section.component.html',
  styleUrls: ['./dish-category-section.component.scss'],
})
export class DishCategorySectionComponent {
  @Input() category?: IDishCategory;
  @Input() dishes: IPopulatedDish[] = [];
}
