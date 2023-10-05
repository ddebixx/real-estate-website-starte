import styles from './styles/landing-page/Home.module.scss'
import React from 'react'
import { HeroSection } from './components/landing-page/HeroSection'
import { Carousel } from './components/landing-page/carousel/Carousel'
import { Offers } from './offers-page/Offers'

export default async function Home() {

  return (
    <>
      <Carousel />
      <main className={styles.main}>
        <HeroSection />
      </main>
    </>

  )
}
