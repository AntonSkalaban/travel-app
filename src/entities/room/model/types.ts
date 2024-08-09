export interface Room {
  __typename: string;
  id: number;
  rating: string;
  reviews: number;
  title: string;
  description: string;
  images: string[];
  decorImages: string[];
  price: number;
  available: boolean;
}

export interface RoomsResponce {
  rooms: Room[];
}

export interface RoomResponce {
  room: Room;
}
