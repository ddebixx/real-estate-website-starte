"use client";

import React from 'react';
import { Offers } from './Offers';
import { InferGetServerSidePropsType } from 'next';
import { Filters } from './filters/Filters';
import { getOffers } from '../features/landing-page/utils/getOffers';
import { OPTIONS } from '../features/offers/constants/filters';
import type { FiltersCheckboxes } from '../features/offers/types/filters';


type PageProps = {
    searchParams: FiltersCheckboxes;
}

export default async function Page({ searchParams }: PageProps) {
   const estateTypes  = Object.entries(searchParams)
    .filter(([key, value]) => value === 'true')
    .map(([key]) => key);


    return (
        <>
            <Filters defaultValues={searchParams} />
            <Offers estateTypes={estateTypes} />
        </>
    )
}