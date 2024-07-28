import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        rooms: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache,
});

export default client;
