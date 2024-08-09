import gql from "graphql-tag";

export const GET_TOURS = gql`
  query getTours($country: String, $offset: Int, $limit: Int) {
    tours(country: $country, offset: $offset, limit: $limit) {
      tours {
        id
        country
        city
        currency
        flag
      }
      totalItems
    }
  }
`;
