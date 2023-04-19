import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetOffersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetOffersQuery = { __typename?: 'Query', offers: Array<{ __typename?: 'Offer', address: string, bedrooms: number, bathrooms: number, datePublished: any, label?: string | null, flatInfo: Array<string>, flatArea: string, flatDescription: string, price: number, id: string, author?: { __typename?: 'Author', id: string, authorName: string, authorPhoto?: { __typename?: 'Asset', url: string } | null } | null, coverPhoto: Array<{ __typename?: 'Asset', url: string }> }> };


export const GetOffersDocument = gql`
    query GetOffers {
  offers {
    author {
      id
      authorName
      authorPhoto {
        url
      }
    }
    address
    bedrooms
    bathrooms
    datePublished
    label
    flatInfo
    flatArea
    flatDescription
    price
    id
    coverPhoto {
      url
    }
  }
}
    `;

/**
 * __useGetOffersQuery__
 *
 * To run a query within a React component, call `useGetOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOffersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOffersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOffersQuery(baseOptions?: Apollo.QueryHookOptions<GetOffersQuery, GetOffersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOffersQuery, GetOffersQueryVariables>(GetOffersDocument, options);
      }
export function useGetOffersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOffersQuery, GetOffersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOffersQuery, GetOffersQueryVariables>(GetOffersDocument, options);
        }
export type GetOffersQueryHookResult = ReturnType<typeof useGetOffersQuery>;
export type GetOffersLazyQueryHookResult = ReturnType<typeof useGetOffersLazyQuery>;
export type GetOffersQueryResult = Apollo.QueryResult<GetOffersQuery, GetOffersQueryVariables>;