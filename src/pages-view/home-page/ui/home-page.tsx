import { FC } from "react";

import { HomeHeader } from "./home-header";
import { OurFacilite } from "./our-facilities";
import { Rooms } from "./rooms";
import { Testimonies } from "./testimonies";

export const HomePage: FC = () => {
  return (
    <>
      <HomeHeader />
      <OurFacilite />
      <Rooms />
      <Testimonies />
    </>
  );
};
