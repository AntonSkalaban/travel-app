import { FC } from "react";

import HomeHeader from "./home-header/ui/home-header";
import OurFacilite from "./our-facilities/ui/our-facilities";
import Rooms from "./rooms/ui/rooms";
import Testimonies from "./testimonies/ui/testimonies";

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
