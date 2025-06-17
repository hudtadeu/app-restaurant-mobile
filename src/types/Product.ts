export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imagePath: string;
  ingredients: {
    name: string;
    icon: string;
    _id: string;
  }[];
}
