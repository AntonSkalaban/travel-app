import gql from "graphql-tag";

export const GET_ROOMS = gql`
  query GetRooms($offset: Int, $limit: Int) {
    rooms(offset: $offset, limit: $limit) {
      id
      title
      images
      price
      available
    }
  }
`;
