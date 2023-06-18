"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay ,Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import styles from '../../../styles/landing-page/Carousel.module.scss';
import Image from 'next/image';

export const Carousel = () => {

    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className={styles.swiper}
            >
                <SwiperSlide className={styles.swiper_slide}>
                    <Image src="/" alt="" width={2000} height={700}/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <Image src="/" alt="" width={2000} height={700}/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <Image src="/" alt="" width={2000} height={700}/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <Image src="/" alt="" width={2000} height={700}/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <Image src="/" alt="" width={2000} height={700}/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <Image src="/" alt="" width={2000} height={700}/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}