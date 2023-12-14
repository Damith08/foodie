type PopulatedDishCategory = {
  _id: string;
  name: string;
};

export class Dish {
  name!: string;
  description!: string;
  price!: number;
  restaurant!: string;
  dishCategory!: PopulatedDishCategory;
  image!: string;
}
