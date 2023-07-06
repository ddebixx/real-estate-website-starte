"use client";

import React from 'react';
import { Offers } from './Offers';
import { FiltersComponent } from './filters/FiltersComponent';
import type { OptionSelect, FiltersCheckboxes } from '../features/offers/types/filters';


type PageProps = {
    searchParams: FiltersCheckboxes & OptionSelect;
}

export default async function Page({ searchParams }: PageProps) {
   const estateTypes  = Object.entries(searchParams)
    .filter(([value]) => value === 'true')
    .map(([key]) => key);

    return (
        <>
            <FiltersComponent defaultValues={searchParams} />
            <Offers estateTypes={estateTypes} districtName={estateTypes}/>
        </>
    )
}