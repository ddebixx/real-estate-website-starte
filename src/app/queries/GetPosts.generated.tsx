import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostsQueryVariables = Types.Exact<{
  skip: Types.Scalars['Int'];
}>;


export type GetPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, postPublishDate: any, postTitle: string, postSlug?: string | null, postContent?: { __typename?: 'RichText', html: string } | null, author?: { __typename?: 'Author', authorName: string, authorPhoto?: { __typename?: 'Asset', url: string } | null } | null }>, postsConnection: { __typename?: 'PostConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor?: string | null, pageSize?: number | null, startCursor?: string | null }, edges: Array<{ __typename?: 'PostEdge', cursor: string, node: { __typename?: 'Post', id: string } }>, aggregate: { __typename?: 'Aggregate', count: number } } };


export const GetPostsDocument = gql`
    query GetPosts($skip: Int!) {
  posts(orderBy: publishedAt_DESC, first: 3, skip: $skip) {
    id
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
  postsConnection {
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      pageSize
      startCursor
    }
    edges {
      cursor
      node {
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
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;