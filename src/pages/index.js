import Head from 'next/head'
import styles from '../styles/index.module.css'

import Navbar from '@/Components/Navbar/Navbar'
import Subtitle from '@/Components/tipography/subtitle/subtitle'
import Container from '@/Components/container/container'
import SaleCard from '@/Components/cards/saleCard/saleCard'
import Gamecard from '@/Components/cards/gamecard/gamecard'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard />
              <SaleCard />
              <SaleCard />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <Gamecard />
              <Gamecard />
              <Gamecard />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
