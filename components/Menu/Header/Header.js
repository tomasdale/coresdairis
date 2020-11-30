import 'react'
import styles from './Header.module.css'
import Image from 'next/image'

function Header() {
    return (
    <div className={styles.header}>
        <div className={styles.brandImage}>
          <Image src="/flor.png" width={100} height={100}></Image>
        </div>
        <div className={styles.brand}>
          <div className={styles.brandName}>Cores da Iris</div>
          <div className={styles.brandText}>Arte e Vida Natural</div>
        </div>
      </div>
    )
}

export default Header;