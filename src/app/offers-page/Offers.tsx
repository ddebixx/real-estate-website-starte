"use client"

import React from 'react';
import styles from '../styles/offers-page/Offers.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getOffers } from '../features/landing-page/utils/getOffers';
import { notFound, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const Pagination = dynamic(() => import("../features/landing-page/pagination/Pagination"), {
    loading: () => <p>...</p>,
});

export const Offers = async () => {
    const searchParams = useSearchParams();
    const page = Number(searchParams.get('page') ?? 1);
    const { offers } = await getOffers(page);
    const pageCount = offers.offersConnection.aggregate.count / 2;
    const pathName = '/offers-page';

    if (!pageCount) {
        notFound();
    }

    console.log(page)

    return (
        <>
            <div className={styles.offer_container}>
                {offers.offers.map(offers =>
                    <div key={offers.id} className={styles.post_container}>
                        <div className={styles.offer_labels}>
                            <Link href={`/offer/${offers.offerSlug}`}>
                                <Image src={offers.coverPhoto[0].url} alt="" width={2000} height={2000} />
                                <p className={styles.price}>{offers.price} $</p>
                                <p className={styles.label}>{offers.label}</p>
                            </Link>

                        </div>
                        <div className={styles.offer_info}>
                            <p className={styles.flat_description}>{offers.flatTitle}</p>
                            <p className={styles.address}>{offers.address}</p>
                            <ul className={styles.flat_info}>
                                <li className={styles.bedrooms}>Спалень: {offers.bedrooms}</li>
                                <li className={styles.bathrooms}>Ванн: {offers.bathrooms}</li>
                                <li className={styles.flat_area}>Площа: {offers.flatArea}m<sup>2</sup> </li>
                            </ul>
                        </div>
                        <div className={styles.publisher_info}>
                            <div className={styles.author}>
                                <Image src={offers.author?.authorPhoto?.url} alt="" width={2000} height={2000} />
                                <p>{offers.author?.authorName}</p>
                            </div>
                            <p>{offers.datePublished}</p>
                        </div>
                    </div>
                )}
            </div>
            <Pagination page={page} pageCount={pageCount} pathname={pathName} />
        </>
    )
}