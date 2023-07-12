"use client";

import React from 'react';
import { Offers } from './Offers';
import { FiltersComponent } from './filters/FiltersComponent';
<<<<<<< HEAD
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

=======
import type { OptionSelect, FiltersCheckboxes } from '../features/offers/types/filters';


type PageProps = {
    searchParams: FiltersCheckboxes & OptionSelect;
}

export default async function Page({ searchParams }: PageProps) {
   const estateTypes  = Object.entries(searchParams)
    .filter(([value]) => value === 'true')
    .map(([key]) => key);
>>>>>>> 3b382cc4f61f07cf8e144bc580e9b27d355d9b0d

    return (
        <>
            <FiltersComponent defaultValues={searchParams} />
            <Offers estateTypes={estateTypes} districtName={districtName} />
        </>
    )
}