import styles from './styles/landing-page/Home.module.scss'
import React from 'react'
import { HeroSection } from './features/landing-page/HeroSection'
import { Posts } from './features/landing-page/Posts'

export default async function Home() {

  return (
    <main className={styles.main}>
        <HeroSection />
    </main>
  )
}
