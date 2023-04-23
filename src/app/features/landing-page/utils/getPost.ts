
import { GetPostQuery } from "../../../../types"
import { GetPostDocument } from "../../../queries/GetPost.generated"
import { client } from "../apollo-client"


export const getPost = async (postSlug:string) => {
    const { data: post } = await client.query<GetPostQuery>({
        query: GetPostDocument, variables: {postSlug}
    })

    return {
        post
    }
}