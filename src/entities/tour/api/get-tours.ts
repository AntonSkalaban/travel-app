import gql from "graphql-tag";

export const GET_TOURS = gql`
  query getTours {
    tours {
      id
      country
      city
      currency
      flag
    }
  }
`;
