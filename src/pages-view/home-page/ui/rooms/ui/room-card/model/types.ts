import { StaticImageData } from "next/image";

export interface RoomCardProps {
  title: string;
  image: StaticImageData;
  count: number;
}
