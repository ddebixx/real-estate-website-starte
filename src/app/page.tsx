import styles from './styles/landing-page/Home.module.scss'
import React from 'react'
import { HeroSection } from './features/landing-page/HeroSection'
import { Carousel } from './features/landing-page/carousel/Carousel'

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
