export enum pagesNamesEnEnam {
  Home = "Home",
  Room = "Room",
  Toure = "Toure",
  ContacUs = "Contac Us",
}

export enum pagesNamesRuEnam {
  Home = "Главная",
  Room = "Комната",
  Toure = "Тур",
  ContacUs = "Связаться",
}

export enum pagesPathsEnam {
  Home = "",
  Room = "room",
  Toure = "toure",
  ContacUs = "contact-us",
}

export const pages = [
  {
    name: { en: pagesNamesEnEnam.Home, ru: pagesNamesRuEnam.Home },
    path: pagesPathsEnam.Home,
  },
  {
    name: { en: pagesNamesEnEnam.Room, ru: pagesNamesRuEnam.Room },
    path: pagesPathsEnam.Room,
  },
  {
    name: { en: pagesNamesEnEnam.Toure, ru: pagesNamesRuEnam.Toure },
    path: pagesPathsEnam.Toure,
  },
  {
    name: { en: pagesNamesEnEnam.ContacUs, ru: pagesNamesRuEnam.ContacUs },
    path: pagesPathsEnam.ContacUs,
  },
];
