import { FC } from "react";

import { RoomHeader } from "pages/room-info/ui/room-header/ui/room-header";
import RoomPage from "pages/room-info/ui/room-info";
import { Wrapper } from "shared/ui/wrapper";

const RoomInfo: FC<{ params: { id: string } }> = ({ params }) => {
  return (
    <>
      {" "}
      <RoomHeader />
      <Wrapper>
        <RoomPage id={Number(params.id)} />
      </Wrapper>
    </>
  );
};

export default RoomInfo;
