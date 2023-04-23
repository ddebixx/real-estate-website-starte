import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostQueryVariables = Types.Exact<{
  postSlug: Types.Scalars['String'];
}>;


export type GetPostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', postPublishDate: any, postTitle: string, postSlug?: string | null, postContent?: { __typename?: 'RichText', html: string } | null, author?: { __typename?: 'Author', authorName: string, authorPhoto?: { __typename?: 'Asset', url: string } | null } | null } | null };


export const GetPostDocument = gql`
    query GetPost($postSlug: String!) {
  post(where: {postSlug: $postSlug}) {
    postPublishDate
    postTitle
    postSlug
    postContent {
      html
    }
    author {
      authorName
      authorPhoto {
        url
      }
    }
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      postSlug: // value for 'postSlug'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;