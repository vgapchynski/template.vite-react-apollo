import { ApolloClient, InMemoryCache } from "@apollo/client";

export const CLIENT = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
});
