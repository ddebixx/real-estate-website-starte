import { GetPostsQuery } from "../../../../types"
import { GetPostsDocument } from "../../../queries/GetPosts.generated"
import { client } from "../apollo-client"

export const getPosts = async (page: number) => {
    const { data: posts } = await client.query<GetPostsQuery>({
        query: GetPostsDocument, variables: {
            skip: (page - 1) * 2,
        }
    })

    return {
        posts
    }
}
