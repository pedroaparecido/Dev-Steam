import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/index.module.css'

import Navbar from '@/Components/Navbar/Navbar'
import Subtitle from '@/Components/tipography/subtitle/subtitle'
import Container from '@/Components/container/container'
import SaleCard from '@/Components/cards/saleCard/saleCard'
import Gamecard from '@/Components/cards/gamecard/gamecard'

export default function Home() {
  const [card, setCard] = useState([])

  const handleAddProduct = (info) => {
    setCard([...card, info])
  }

  const handleRemoveProduct = (pos) => {
    setCard(card.filter((obj, posObj) => posObj !== pos))
  }

  console.log(card)

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar card={card} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
                image={'league-of-legends.jpg'}
                discount='30%'
                fullprice='199,90'
                discountprice='99,90'
                onAdd={() => handleAddProduct({ name: 'Legue of Legends', price: 99.9, image: 'league-of-legends.jpg' })}
              />
              <SaleCard
                image={'dota-2.jpg'}
                discount='40%'
                fullprice='299,90'
                discountprice='109,90'
                onAdd={() => handleAddProduct({ name: 'Dota 2', price: 99.9, image: 'dota-2.jpg' })}
              />
              <SaleCard
                image={'valorant.jpg'}
                discount='50%'
                fullprice='399,90'
                discountprice='199,90'
                onAdd={() => handleAddProduct({ name: 'valorant', price: 99.9, image: 'valorant.jpg' })}
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <Gamecard
                onAdd={() => handleAddProduct({ name: 'Counter Strike', price: 99.9, image: 'counter-strike.jpg' })}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
