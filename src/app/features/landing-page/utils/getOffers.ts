import { GetOffersDocument } from "@/app/queries/GetOffers.generated"
import { client } from "../apollo-client"
import { GetOffersQuery } from "@/types"

export const getOffers = async () => {
    const { data: offers } = await client.query<GetOffersQuery>({
        query: GetOffersDocument,
    })

    return {
        offers
    }
}