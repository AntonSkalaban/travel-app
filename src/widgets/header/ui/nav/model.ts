export enum pagesNamesEnam {
  Home = "Home",
  Room = "Room",
  Toure = "Toure",
  ContacUs = "Contac Us",
}

export enum pagesPathsEnam {
  Home = "",
  Room = "room",
  Toure = "toure",
  ContacUs = "contact-us",
}

export const pages = [
  { name: pagesNamesEnam.Home, path: pagesPathsEnam.Home },
  { name: pagesNamesEnam.Room, path: pagesPathsEnam.Room },
  { name: pagesNamesEnam.Toure, path: pagesPathsEnam.Toure },
  { name: pagesNamesEnam.ContacUs, path: pagesPathsEnam.ContacUs },
];
