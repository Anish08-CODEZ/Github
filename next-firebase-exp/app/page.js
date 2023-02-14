import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className = {inter.className}>Starting next-firebase-exp APP!</h2>
      <h2 className = "text-3xl font-bold underline">Starting next-firebase-exp APP!</h2>
    </main>
  )
}
