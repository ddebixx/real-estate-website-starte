import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clgi6z7zg255e01ugeicib4hw/master',
  cache: new InMemoryCache(),
});