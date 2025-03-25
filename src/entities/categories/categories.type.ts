export type Category = {
  id: number;
  name: string;
  imageUrl: string;
};

export type CategoriesResponseType = {
  content: Category[];
};
