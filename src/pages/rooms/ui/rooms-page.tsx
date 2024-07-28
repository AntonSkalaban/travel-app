import { FC } from "react";

import { RoomsHeader } from "./rooms-header/ui/rooms-header";
import { RoomsList } from "./rooms-list/ui/rooms-list";
import { Video } from "./viedeo/ui/video";

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
