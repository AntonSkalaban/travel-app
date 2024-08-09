import gql from "graphql-tag";

export const GET__REVIEWS = gql`
  query GetReviews {
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
