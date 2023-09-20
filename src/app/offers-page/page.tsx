"use client";

import React from 'react';
import { Offers } from './Offers';
import { FiltersComponent } from './filters/FiltersComponent';
import type { FiltersCheckboxes, DistrictOptionSelect } from '../features/offers/types/filters';


type PageProps = {
    searchParams: FiltersCheckboxes & DistrictOptionSelect;
}

export default async function Page({ searchParams }: PageProps) {
    const estateTypes = Object.entries(searchParams)
        .filter(([key, value]) => value === 'true')
        .map(([key]) => key);

    const districtName = Object.entries(searchParams)
        .filter(([key, value]) => value === typeof "string")
        .map(([key]) => key);

    const filters = Object.entries(searchParams).map(([key, value]) => {
        if (value === "true") {
            return [key, true]
        }

        if (value === "false") {
            return [key, false]
        }

        return [key, value]
    })


    return (
        <>
            <FiltersComponent defaultValues={searchParams} />
            <Offers estateTypes={estateTypes} districtName={districtName} />
        </>
    )
}
