import { GetPostsQuery } from "../../types"
import { client } from "../components/landing-page/apollo-client"
import { GetPostsDocument } from "../queries/GetPosts.generated"


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
