import { FC } from "react";

import { Wrapper } from "shared/ui/wrapper";

import HomeHeader from "./home-header/ui/home-header";
import OurFacilite from "./our-facilities/ui/our-facilities";
import Testimonies from "./testimonies/ui/testimonies";

const HomePage: FC = () => {
  return (
    <Wrapper>
      <HomeHeader />
      <OurFacilite />
      <Testimonies />
    </Wrapper>
  );
};

export default HomePage;
