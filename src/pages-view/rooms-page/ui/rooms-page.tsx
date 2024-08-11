import { FC } from "react";

import { RoomsHeader } from "./rooms-header";
import { RoomsList } from "./rooms-list";
import { Video } from "./viedeo";

export const RoomsPage: FC = () => {
  return (
    <>
      <RoomsHeader />
      <Video />
      <RoomsList />
    </>
  );
};
