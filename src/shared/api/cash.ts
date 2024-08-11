import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
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
