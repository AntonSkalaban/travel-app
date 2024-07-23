import gql from "graphql-tag";

export const LIST_REVIEWS = gql`
  query {
    reviews {
      id
      date
      rating
      text
      authorImage
      authorName
    }
  }
`;
