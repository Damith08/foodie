import { IDish, IPopulatedDish } from './dishes.types';

export interface IDishCategory {
  _id: string;
  name: string;
}

export interface ICategory {
  category: {
    _id: string;
    name: string;
  };
  dishes: IPopulatedDish[];
}

export { IDish };
