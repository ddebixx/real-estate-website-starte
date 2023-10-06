import { GetPostQuery } from "../../types"
import { client } from "../components/landing-page/apollo-client"
import { GetPostDocument } from "../queries/GetPost.generated"



export const getPost = async (postSlug:string) => {
    const { data: post } = await client.query<GetPostQuery>({
        query: GetPostDocument, variables: {postSlug}
    })

    return {
        post
    }
}