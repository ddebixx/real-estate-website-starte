"use client"

import Link from 'next/link';
import styles from '../../styles/landing-page/Footer.module.scss';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <>
            <footer className={styles.footer} id="contact">
                <div className={styles.footer_elements}>
                    <div className={styles.contact}>
                        <h4>Контактна інформація:</h4>
                        <ul>
                            <li>
                                <PlaceRoundedIcon className={styles.contact_icon} />
                                <span> м. Чернівці, вул. Героїв Майдану, 1</span>
                            </li>
                            <li>
                                <Link href="tel: +38 (0372) 55-55-55">
                                    <LocalPhoneRoundedIcon className={styles.contact_icon} />
                                    <span> +38 (0372) 55-55-55</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="tel: +38 (0372) 55-55-55">
                                    <LocalPhoneRoundedIcon className={styles.contact_icon} />
                                    <span> +38 (0372) 55-55-55</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="tel: +38 (0372) 55-55-55">
                                    <LocalPhoneRoundedIcon className={styles.contact_icon} />
                                    <span> +38 (0372) 55-55-55</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:example@example.com">
                                    <EmailRoundedIcon className={styles.contact_icon} />
                                    <span> Електронна пошта </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <FacebookIcon className={styles.contact_icon} />
                                    <span> Facebook</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <InstagramIcon className={styles.contact_icon} />
                                    <span> Instagram</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.posts}>
                        <h4>Дописи та поради:</h4>
                        <ul>
                            <li>
                                <Link href="/posts-page/">
                                    Статті
                                </Link>
                            </li>
                            <li>
                                <Link href="">Поради для покупців</Link>
                            </li>
                            <li>
                                <Link href="">Поради для продавців</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="absolute bottom-0 bg-[#1E56A0] w-full py-4 text-white text-center max-md:text-sm">
                    Copyright © Агентство нерухомості "Ваш Ковчег" {getCurrentYear()}
                </div>
            </footer>
        </>
    )
}