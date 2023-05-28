import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetOfferQueryVariables = Types.Exact<{
  offerSlug: Types.Scalars['String'];
}>;


export type GetOfferQuery = { __typename?: 'Query', offer?: { __typename?: 'Offer', address: string, bedrooms: number, bathrooms: number, datePublished: any, label?: string | null, flatInfo: Array<string>, flatArea: string, flatTitle: string, price: number, id: string, offerSlug?: string | null, author?: { __typename?: 'Author', id: string, authorName: string, authorPhoto?: { __typename?: 'Asset', url: string } | null } | null, flatDescription: { __typename?: 'RichText', html: string }, coverPhoto: Array<{ __typename?: 'Asset', url: string }> } | null };


export const GetOfferDocument = gql`
    query GetOffer($offerSlug: String!) {
  offer(where: {offerSlug: $offerSlug}) {
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
    flatTitle
    flatDescription {
      html
    }
    price
    id
    offerSlug
    coverPhoto {
      url
    }
  }
}
    `;

/**
 * __useGetOfferQuery__
 *
 * To run a query within a React component, call `useGetOfferQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOfferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOfferQuery({
 *   variables: {
 *      offerSlug: // value for 'offerSlug'
 *   },
 * });
 */
export function useGetOfferQuery(baseOptions: Apollo.QueryHookOptions<GetOfferQuery, GetOfferQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOfferQuery, GetOfferQueryVariables>(GetOfferDocument, options);
      }
export function useGetOfferLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOfferQuery, GetOfferQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOfferQuery, GetOfferQueryVariables>(GetOfferDocument, options);
        }
export type GetOfferQueryHookResult = ReturnType<typeof useGetOfferQuery>;
export type GetOfferLazyQueryHookResult = ReturnType<typeof useGetOfferLazyQuery>;
export type GetOfferQueryResult = Apollo.QueryResult<GetOfferQuery, GetOfferQueryVariables>;