import { ApolloClient, InMemoryCache } from '@apollo/client'

export const countriesClient = new ApolloClient ({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache({
    resultCaching: false
  }),
});