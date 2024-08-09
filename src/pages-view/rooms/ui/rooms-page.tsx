import { FC } from "react";

import RoomsHeader from "./rooms-header/ui";
import RoomsList from "./rooms-list/ui";
import Video from "./viedeo/ui";

const RoomsPage: FC = () => {
  return (
    <>
      <RoomsHeader />
      <Video />
      <RoomsList />
    </>
  );
};

export default RoomsPage;
