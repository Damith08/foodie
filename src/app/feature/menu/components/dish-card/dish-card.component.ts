import { Component, Input } from '@angular/core';
import { IPopulatedDish } from '../../types/dishes.types';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent {
  @Input() dish?: IPopulatedDish;
}
