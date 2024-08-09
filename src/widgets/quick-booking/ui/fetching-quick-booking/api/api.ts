import gql from "graphql-tag";

export const LIST_COUNTRIES = gql`
  query {
    countries {
      ru
      en
    }
  }
`;
