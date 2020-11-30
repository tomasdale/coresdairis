import Head from 'next/head'
import styles from './Home.module.css'
import Image from 'next/image'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cores da Iris</title>
        <link rel="icon" href="/flor.ico" />
      </Head>

      <Menu></Menu>

      <main className={styles.main}>
        <div className={styles.section}>
            <div className={styles.sectionText}>
              <div className={styles.sectionHeader}>Massagem</div>
              <div className={styles.sectionBody}>Resumo</div>
            </div>
          <div className={styles.sectionImage}>
            <Image src="/sala.jpg" alt="Sala de Massagem" width={1666} height={937}></Image>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionImage}>
            <Image src="/trekking.jpg" alt="Trekking" width={1174} height={720}></Image>
          </div>
          <div className={styles.sectionText}>
            <div className={styles.sectionHeader}>Trekking</div>
            <div className={styles.sectionBody}>Resumo</div></div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionText}>
            <div className={styles.sectionHeader}>Produtos Naturais</div>
            <div className={styles.sectionBody}>Resumo</div>
          </div>
          <div className={styles.sectionImage}>
            <Image src="/produtos.jpg" alt="Produtos" width={1920} height={1280}></Image>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}
