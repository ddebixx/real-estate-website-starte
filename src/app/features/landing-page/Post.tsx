import React from 'react';
import { getOffers } from './utils/getOffers';
import { Style } from '@mui/icons-material';
import styles from '../../styles/landing-page/Post.module.scss';
import Image from 'next/image';

export const Post = async () => {

    const { offers } = await getOffers()

    return (
        <>
            <div className={styles.offer_container}>
                {offers.offers.map(offer =>
                    <div key={offer.id} className={styles.post_container}>
                        <div className={styles.offer_labels}>
                            <Image src={offer.coverPhoto[0].url} alt="" width={2000} height={2000} />
                            <p className={styles.price}>{offer.price} $</p>
                            <p className={styles.label}>{offer.label}</p>
                        </div>
                        <div className={styles.offer_info}>
                            <p className={styles.flat_description}>{offer.flatDescription}</p>
                            <p className={styles.address}>{offer.address}</p>
                            <ul className={styles.flat_info}>
                                <li className={styles.bedrooms}>Спалень: {offer.bedrooms}</li>
                                <li className={styles.bathrooms}>Ванн: {offer.bathrooms}</li>
                                <li className={styles.flat_area}>Площа: {offer.flatArea}m<sup>2</sup> </li>
                            </ul>
                        </div>
                        <div className={styles.publisher_info}>
                            <div className={styles.author}>
                                <Image src={offer.author?.authorPhoto?.url} alt="" width={2000} height={2000} />
                                <p>{offer.author?.authorName}</p>
                            </div>
                            <p>{offer.datePublished}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}