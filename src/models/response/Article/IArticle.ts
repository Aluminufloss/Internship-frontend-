export interface IArticle {
  _id: string,
  heading: string,
  value: string,
  category: string,
}

export interface INewArticle extends Omit<IArticle, "_id"> { }