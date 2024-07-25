import { FC } from "react";

import { RoomsHeader } from "./rooms-header/ui/rooms-header";
import { Video } from "./viedeo/ui/video";

const RoomsPage: FC = () => {
  return (
    <>
      <RoomsHeader />
      <Video />
    </>
  );
};

export default RoomsPage;
