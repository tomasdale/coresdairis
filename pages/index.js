import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cores da Iris</title>
        <link rel="icon" href="/flor.ico" />
      </Head>
      <Image src="/vale.jpg" layout="intrinsic" width={4000} height={286}></Image>
      <main className={styles.main}>
        
        <h1 className={styles.title}>
         
        </h1>

        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}></div>
        </div>
      </main>

      <footer className={styles.footer}>
        Created By Tomas D'Alessandro
      </footer>
    </div>
  )
}
