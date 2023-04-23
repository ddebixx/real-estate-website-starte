import { GetOfferQuery } from "../../../../types"
import { GetOfferDocument } from "../../../queries/GetOffer.generated"
import { client } from "../apollo-client"


export const getOffer = async (offerSlug:string) => {
    const { data: offer } = await client.query<GetOfferQuery>({
        query: GetOfferDocument, variables: {offerSlug}
    })

    return {
        offer
    }
}