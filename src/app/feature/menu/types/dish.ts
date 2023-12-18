import { IDishCategory } from "./category";

export interface IPopulatedDish {
  name: string;
  description: string;
  price: number;
  restaurant: string;
  dishCategory: IDishCategory;
  image: string;
}
export interface IDish {
  name: string;
  description: string;
  price: number;
  restaurant: string;
  dishCategoryId: string;
  image: string;
}
