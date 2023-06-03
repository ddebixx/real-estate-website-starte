import { GetOffersQuery } from "../../../../types"
import { GetOffersDocument } from "../../../queries/GetOffers.generated"
import { client } from "../apollo-client"


export const getOffers = async (page: number) => {
    const { data: offers } = await client.query<GetOffersQuery>({
        query: GetOffersDocument, variables: {
            skip: (page - 1) * 2,
            estateType: "apartment"
        }
    })

    return {
        offers
    };
};