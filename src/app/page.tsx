import styles from './styles/landing-page/Home.module.scss'
import { Filters } from './features/landing-page/Filters'
import React from 'react'
import { Offer } from './features/landing-page/Offer'
import { Post } from './features/landing-page/Post'

export default async function Home() {

  return (
    <main className={styles.main}>
        <Filters />
        <Offer address='' />
        <Post />
    </main>
  )
}
