import gql from "graphql-tag";

export const GET_TOURS_COUNTRIES = gql`
  query getToursCountries($country: String) {
    toursCountries(country: $country) {
      country
    }
  }
`;
