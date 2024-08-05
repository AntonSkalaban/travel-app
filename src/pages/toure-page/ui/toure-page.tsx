"use client";
import { FC } from "react";

import { Wrapper } from "shared/ui/wrapper";

import { CardsList } from "./cars-list/ui/cards-list";
import { ToureSearch } from "./toure-search/ui/toure-serach";

export const TourePage: FC = () => {
  return (
    <Wrapper>
      <ToureSearch />
      <CardsList />
    </Wrapper>
  );
};
