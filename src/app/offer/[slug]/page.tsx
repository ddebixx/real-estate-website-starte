import React from 'react';
import styles from '../../styles/landing-page/Offer.module.scss';
import Image from 'next/image';
import { getOffer } from '../../features/landing-page/utils/getOffer';

export default async function OfferPage({
    params,
}: {
    params: { slug: string }
}) {


    const { offer } = await getOffer(params.slug)


    return (
        <>
            <div className={styles.offer_container}>
                <div key={offer.offer.id} className={styles.post_container}>
                    <div className={styles.offer_labels}>
                        <Image src={offer.offer.coverPhoto[0].url} alt="" width={2000} height={2000} />
                        <p className={styles.price}>{offer.offer.price} $</p>
                        <p className={styles.label}>{offer.offer.label}</p>
                    </div>
                    <div className={styles.offer_info}>
                        <p className={styles.flat_description}>{offer.offer.flatDescription}</p>
                        <p className={styles.address}>{offer.offer.address}</p>
                        <ul className={styles.flat_info}>
                            <li className={styles.bedrooms}>Спалень: {offer.offer.bedrooms}</li>
                            <li className={styles.bathrooms}>Ванн: {offer.offer.bathrooms}</li>
                            <li className={styles.flat_area}>Площа: {offer.offer.flatArea}m<sup>2</sup> </li>
                        </ul>
                    </div>
                    <div className={styles.publisher_info}>
                        <div className={styles.author}>
                            <Image src={offer.offer.author?.authorPhoto?.url} alt="" width={2000} height={2000} />
                            <p>{offer.offer.author?.authorName}</p>
                        </div>
                        <p>{offer.offer.datePublished}</p>
                    </div>
                </div>
            </div>
        </>
    )
}