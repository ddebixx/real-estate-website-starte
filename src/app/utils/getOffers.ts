import { GetOffersQuery, GetOffersQueryVariables } from "../../types";
import { client } from "../components/landing-page/apollo-client";
import { GetOffersDocument } from "../features/offers/queries/GetOffers.generated";

export const getOffers = async (page: number, estateTypes: string[], districtName: string[]) => {
    const { data: offers }= await client.query<GetOffersQuery, GetOffersQueryVariables>({
        query: GetOffersDocument, variables: {
            skip: (page - 1) * 2,
            estateTypeIn: estateTypes.length === 0 ? ["apartment", "land", "house", "commercial"] : estateTypes,
            districtTypeIn: districtName.length === 0 ? ["prospect", "downTown", "aeroport", "soborna"] : districtName,
        }
    })

    return {
        offers,
    };
};