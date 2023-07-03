import * as Types from '../../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetOffersQueryVariables = Types.Exact<{
  skip: Types.Scalars['Int'];
  estateTypeIn?: Types.InputMaybe<Array<Types.InputMaybe<Types.Scalars['String']>> | Types.InputMaybe<Types.Scalars['String']>>;
  disrictTypeIn?: Types.InputMaybe<Array<Types.InputMaybe<Types.Scalars['String']>> | Types.InputMaybe<Types.Scalars['String']>>;
}>;


export type GetOffersQuery = { __typename?: 'Query', offers: Array<{ __typename?: 'Offer', estateType: string, address: string, bedrooms: number, bathrooms: number, datePublished: any, label?: string | null, flatInfo: Array<string>, flatTitle: string, flatArea: string, district?: string | null, price: number, id: string, offerSlug?: string | null, author?: { __typename?: 'Author', id: string, authorName: string, authorPhoto?: { __typename?: 'Asset', url: string } | null } | null, flatDescription: { __typename?: 'RichText', html: string }, coverPhoto: { __typename?: 'Asset', url: string } }>, offersConnection: { __typename?: 'OfferConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor?: string | null, pageSize?: number | null, startCursor?: string | null }, edges: Array<{ __typename?: 'OfferEdge', node: { __typename?: 'Offer', address: string, id: string } }>, aggregate: { __typename?: 'Aggregate', count: number } } };


export const GetOffersDocument = gql`
    query GetOffers($skip: Int!, $estateTypeIn: [String], $disrictTypeIn: [String]) {
  offers(
    where: {estateType_in: $estateTypeIn, district_in: $disrictTypeIn}
    orderBy: datePublished_DESC
    first: 2
    skip: $skip
  ) {
    author {
      id
      authorName
      authorPhoto {
        url
      }
    }
    estateType
    address
    bedrooms
    bathrooms
    datePublished
    label
    flatInfo
    flatTitle
    flatArea
    district
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
  offersConnection {
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      pageSize
      startCursor
    }
    edges {
      node {
        address
        id
      }
    }
    aggregate {
      count
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
 *      skip: // value for 'skip'
 *      estateTypeIn: // value for 'estateTypeIn'
 *      disrictTypeIn: // value for 'disrictTypeIn'
 *   },
 * });
 */
export function useGetOffersQuery(baseOptions: Apollo.QueryHookOptions<GetOffersQuery, GetOffersQueryVariables>) {
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