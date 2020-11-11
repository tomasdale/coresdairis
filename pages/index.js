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
      <div className={styles.header}>
        <Image src="/flor.png" width={100} height={100}></Image>
        <div className={styles.brand}>
          <div className={styles.brandName}>Cores da Iris</div>
          <div className={styles.brandText}>Arte e Vida Natural</div>
        </div>
      </div>
      
      <main className={styles.main}>
     

        <div className={styles.grid}>
          <div className={styles.card}>Massagem</div>
          <div className={styles.card}>Passeios</div>
          <div className={styles.card}>Produtos</div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>Contato: </div>
        <div>Created By: Tomas D'Alessandro</div>
      </footer>
    </div>
  )
}
