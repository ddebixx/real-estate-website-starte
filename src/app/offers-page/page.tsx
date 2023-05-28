"use client";

import React from 'react';
import { Filters } from './filters/Filters';
import { Offers } from './Offers';


export default async function offerPage() {

    return (
        <>
            <Filters />
            <Offers />
        </>
    )
}