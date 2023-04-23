import { GetOffersQuery } from "../../../../types"
import { GetOffersDocument } from "../../../queries/GetOffers.generated"
import { client } from "../apollo-client"

export const getOffers = async () => {
    const { data: offers } = await client.query<GetOffersQuery>({
        query: GetOffersDocument
    })

    return {
        offers
    }
}