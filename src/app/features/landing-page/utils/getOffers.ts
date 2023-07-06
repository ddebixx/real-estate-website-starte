import { GetOffersQuery } from "../../../../types";
import { GetOffersDocument, GetOffersQueryVariables } from "../../offers/queries/GetOffers.generated";
import { client } from "../apollo-client"


export const getOffers = async (page: number, estateTypes: string[], districtName: string[]) => {
    const { data: offers }= await client.query<GetOffersQuery, GetOffersQueryVariables>({
        query: GetOffersDocument, variables: {
            skip: (page - 1) * 2,
            estateTypeIn: estateTypes.length === 0 ? ["apartment", "land", "house", "commercial"] : estateTypes,
            disrictTypeIn: districtName.length === 0 ? ["prospect", "downTown", "sleeping"]: districtName,
        }
    })

    return {
        offers,
    };
};