import { FC } from "react";

import { videoPoster, videoSrc } from "../model";
import { RoomsHeader } from "./rooms-header";
import { RoomsList } from "./rooms-list";
import { Video } from "./viedeo";

export const RoomsPage: FC = () => {
  return (
    <>
      <RoomsHeader />
      <Video src={videoSrc} poster={videoPoster} />
      <RoomsList />
    </>
  );
};
