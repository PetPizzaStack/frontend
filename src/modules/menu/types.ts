export interface IMenuItemProps {
  title: string;
  link: string;
  imageSource: string;
  ingredients: string[];
  weight: number;
  price: number;
}

export interface IMenuItem extends IMenuItemProps {
  id: string;
}
