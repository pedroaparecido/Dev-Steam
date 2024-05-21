import Image from 'next/image'

import styles from './gamecard.module.css'
import Button from '@/Components/forms/button/button'

export default function Gamecard() {
    return(
        <div className={styles.gamecard}>
            <Image className={styles.image} src='/products/counter-strike.jpg' width={300} height={145} />
            <div className={styles.info}>
                <h3 className={styles.title}>Counter Strik: Global offensive</h3>
                <p className={styles.category}>Ação, etrategia</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>R$99,90</h2>
                    <Button>Adicionar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}