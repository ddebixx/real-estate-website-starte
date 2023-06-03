"use client";

import React from 'react';
import { Offers } from './Offers';
import { InferGetServerSidePropsType } from 'next';
import { Filters } from './filters/Filters';
import { getOffers } from '../features/landing-page/utils/getOffers';


export default async function offerPage() {

    return (
        <>
            <Filters />
            <Offers />
        </>
    )
}