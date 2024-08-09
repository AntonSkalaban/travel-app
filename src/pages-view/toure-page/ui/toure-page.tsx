"use client";
import { FC } from "react";

import { Wrapper } from "shared/ui/wrapper";

import CardsList from "./cars-list/ui";
import Header from "./header/ui/header";
import ToureSearch from "./toure-search/ui";

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
