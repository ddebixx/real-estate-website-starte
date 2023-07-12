"use client";

import React from 'react';
import { Offers } from './Offers';
import { FiltersComponent } from './filters/FiltersComponent';
import type { FiltersCheckboxes, DistrictOptionSelect, PriceToSelect, PriceFromSelect } from '../features/offers/types/filters';


type PageProps = {
    searchParams: FiltersCheckboxes &
    DistrictOptionSelect &
    PriceToSelect &
    PriceFromSelect;
}

export default async function Page({ searchParams }: PageProps) {
    const estateTypes = Object.entries(searchParams)
        .filter(([key, value]) => value === 'true')
        .map(([key]) => key);

    const districtName = Object.entries(searchParams)
        .filter(([key, value]) => value === 'true')
        .map(([key]) => key);


    return (
        <>
            <FiltersComponent defaultValues={searchParams} />
            <Offers estateTypes={estateTypes} districtName={districtName} />
        </>
    )
}