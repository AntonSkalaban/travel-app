"use client";
import { FC } from "react";

import { Wrapper } from "shared/ui/wrapper";

import { CardsList } from "./cars-list/ui/cards-list";
import { Header } from "./header/ui/header";
import { ToureSearch } from "./toure-search/ui/toure-serach";

export const TourePage: FC = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <ToureSearch />
        <CardsList />
      </Wrapper>
    </>
  );
};
