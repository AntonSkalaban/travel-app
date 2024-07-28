import gql from "graphql-tag";

export const LIST_ROOMS = gql`
  query Query($offset: Int, $limit: Int) {
    rooms(offset: $offset, limit: $limit) {
      id
      title
      images
      price
      available
    }
  }
`;
