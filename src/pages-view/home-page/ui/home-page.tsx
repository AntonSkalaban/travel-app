import { FC } from "react";

import HomeHeader from "./home-header/ui";
import OurFacilite from "./our-facilities/ui";
import Rooms from "./rooms/ui";
import Testimonies from "./testimonies/ui";

const HomePage: FC = () => {
  return (
    <>
      <HomeHeader />
      <OurFacilite />
      <Rooms />
      <Testimonies />
    </>
  );
};

export default HomePage;
