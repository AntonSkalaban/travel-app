import { ApolloClient } from "@apollo/client";

import { cache } from "./cash";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache,
});

export default client;
