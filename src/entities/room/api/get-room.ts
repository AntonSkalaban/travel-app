import gql from "graphql-tag";

export const GET_ROOM = gql`
  query GetRoom($id: Int) {
    room(id: $id) {
      id
      rating
      reviews
      title
      description
      images
      decorImages
      price
      available
    }
  }
`;
