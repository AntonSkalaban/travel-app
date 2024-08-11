import { FC } from "react";

import { RoomPage } from "pages-view/room-page";
import { RoomHeader } from "pages-view/room-page/ui/room-header";
import { Wrapper } from "shared/ui/components/wrapper/ui";

const RoomInfo: FC<{ params: { id: string } }> = ({ params }) => {
  return (
    <>
      <RoomHeader />
      <Wrapper>
        <RoomPage id={Number(params.id)} />
      </Wrapper>
    </>
  );
};

export default RoomInfo;
