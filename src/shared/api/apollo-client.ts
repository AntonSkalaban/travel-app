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
        tours: {
          keyArgs: ["country"],
          merge(existing, incoming) {
            const tours = [...(existing?.tours || []), ...incoming.tours];

            return { ...existing, ...incoming, tours };
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
