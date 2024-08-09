import { Tour } from "entities/tour/model";

export interface CardsListProps {
  isFetching: boolean;
  cards: Tour[];
}
