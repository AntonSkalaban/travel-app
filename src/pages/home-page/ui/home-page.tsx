import { FC } from "react";

import HomeHeader from "./home-header/ui/home-header";
import OurFacilite from "./our-facilities/ui/our-facilities";
import Testimonies from "./testimonies/ui/testimonies";

const HomePage: FC = () => {
  return (
    <>
      <HomeHeader />
      <OurFacilite />
      <Testimonies />
    </>
  );
};

export default HomePage;
