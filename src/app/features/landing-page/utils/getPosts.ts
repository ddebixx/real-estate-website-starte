import { GetPostsQuery } from "../../../../types"
import { GetPostsDocument } from "../../../queries/GetPosts.generated"
import { client } from "../apollo-client"

export const getPosts = async () => {
    const { data: posts } = await client.query<GetPostsQuery>({
        query: GetPostsDocument
    })

    return {
        posts
    }
}
