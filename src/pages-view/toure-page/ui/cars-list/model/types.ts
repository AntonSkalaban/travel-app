import { Tour } from "entities/tour";

export interface CardsListProps {
  isFetching: boolean;
  cards: Tour[];
}
