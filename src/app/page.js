import styles from './page.module.scss'
import TopBar from '@/components/MainPage/TopBar/TopBar'

export default function Home() {
  return (
    <main className={styles.main}>
      <TopBar />
      Lycoiref的Blog，还在施工中......
    </main>
  )
}
