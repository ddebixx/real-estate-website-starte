import { GetOfferQuery } from "../../types"
import { client } from "../components/landing-page/apollo-client"
import { GetOfferDocument } from "../queries/GetOffer.generated"

export const getOffer = async (offerSlug:string) => {
    const { data: offer } = await client.query<GetOfferQuery>({
        query: GetOfferDocument, variables: {offerSlug}
    })

    return {
        offer
    }
}