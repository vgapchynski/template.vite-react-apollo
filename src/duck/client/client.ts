import { ApolloClient, InMemoryCache } from "@apollo/client";

export const CLIENT = new ApolloClient({
  uri: import.meta.env.API_URL,
  cache: new InMemoryCache(),
});
