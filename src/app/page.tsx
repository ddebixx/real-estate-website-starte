import styles from './styles/landing-page/Home.module.scss'
import { Post } from './features/landing-page/Post'
import { Filters } from './features/landing-page/Filters'

export default async function Home() {

  return (
    <main className={styles.main}>
        <Filters />
        <Post address='' />
    </main>
  )
}
