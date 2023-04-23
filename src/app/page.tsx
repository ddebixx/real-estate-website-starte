import styles from './styles/landing-page/Home.module.scss'
import { Filters } from './features/landing-page/Filters'
import React from 'react'
import { HeroSection } from './features/landing-page/HeroSection'
import { Offers } from './features/landing-page/Offers'
import { Posts } from './features/landing-page/Posts'

export default async function Home() {

  return (
    <main className={styles.main}>
        <Filters />
        <Offers />
        <HeroSection />
        <Posts />
    </main>
  )
}
