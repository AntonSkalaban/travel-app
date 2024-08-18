import { ApolloClient } from "@apollo/client";

import { cache } from "./cash";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache,
});
