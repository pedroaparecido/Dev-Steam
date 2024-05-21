import Head from 'next/head'

import Navbar from '@/Components/Navbar/Navbar'
import Subtitle from '@/Components/tipography/subtitle/subtitle'
import Container from '@/Components/container/container'

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
          <div>
            <Subtitle>Promoções</Subtitle>
          </div>
          <div>
            <Subtitle>Outros Jogos</Subtitle>
          </div>
        </Container>
      </div>
    </>
  )
}
