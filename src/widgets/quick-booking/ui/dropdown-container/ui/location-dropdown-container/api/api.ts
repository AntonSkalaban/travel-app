import gql from "graphql-tag";

export const LIST_COUNTRIES = gql`
  {
    countries {
      name
    }
  }
`;
