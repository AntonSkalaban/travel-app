"use client";
import { FC } from "react";

import { Wrapper } from "shared/ui";

import { CardsList } from "./cars-list";
import { Header } from "./header";
import { ToureSearch } from "./toure-search";

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
