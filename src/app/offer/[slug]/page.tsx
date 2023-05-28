"use client"

import React from 'react';
import styles from '../../styles/offers-page/Offer.module.scss';
import Image from 'next/image';
import { getOffer } from '../../features/landing-page/utils/getOffer';
import KingBedRoundedIcon from '@mui/icons-material/KingBedRounded';
import BathtubRoundedIcon from '@mui/icons-material/BathtubRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export default async function OfferPage({
    params,
}: {
    params: { slug: string }
}) {

    const { offer } = await getOffer(params.slug)

    return (
        <>
            <div className="flex flex-row h-full items-center justify-evenly mt-20 gap-10 max-w-[1200px] mx-auto max-lg:flex-col max-lg:px-0 my-16">
                <div className="flex flex-col gap-6 max-lg:flex-row max-lg:overflow-scroll max-lg:overflow-y-hidden max-lg:snap-x max-lg:px-16 max-lg:w-[85vw]">
                    {Object.entries(offer.offer.coverPhoto).map(([key, value]) => (
                        <Image key={key} src={value.url} alt="" width={600} height={2000} className="object-cover rounded-sm max-lg:snap-center max-lg:shrink-0" />
                    ), [])}
                </div>
                <div className={styles.offer_info}>
                    <h2 className="text-black font-bold text-2xl tracking-wider max-lg:self-center">
                        {offer.offer.flatTitle}
                    </h2>
                    <div className="flex gap-4 text-xl">
                        <p><KingBedRoundedIcon className="text-[#163172]" /> {offer.offer.bedrooms}</p>
                        <p><BathtubRoundedIcon className="text-[#163172]" /> {offer.offer.bathrooms}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-black/70 cursor-pointer">{offer.offer.address}</p>
                        <p className="text-black text-bold text-xl">{offer.offer.price} $</p>
                    </div>
                    <div className={styles.flat_info}>
                        {Object.entries(offer.offer.flatInfo).map(([key, value]) => (
                            <p key={key}><CheckRoundedIcon className="color-[#163172] text-lg" /> {value}</p>
                        ), [])}
                    </div>
                    <div className="text-black/70 font-regular mb-6 text-lg max-lg:self-center" dangerouslySetInnerHTML={{ __html: offer.offer.flatDescription.html }}></div>
                    <div className={styles.publisher_info}>
                        <div className={styles.author}>
                            <Image src={offer.offer.author.authorPhoto.url} alt="" width={2000} height={2000} />
                            <p>{offer.offer.author?.authorName}</p>
                        </div>
                        <p>{offer.offer.datePublished}</p>
                    </div>
                </div>
            </div>
        </>
    )
}