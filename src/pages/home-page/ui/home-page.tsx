import { FC } from "react";

import HomeHeader from "./home-header/ui/home-header";
import OurFacilite from "./our-facilities/ui/our-facilities";

const HomePage: FC = () => {
  return (
    <>
      <HomeHeader />
      <OurFacilite />
    </>
  );
};

export default HomePage;
