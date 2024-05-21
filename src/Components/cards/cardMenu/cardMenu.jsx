import styles from './cardMenu.module.css'

import CardOption from '@/Components/cardOption/cardOption'

export default function CardMenu() {
    return(
        <div className={styles.menu}>
            <div className={styles.options}>
                <CardOption />
                <CardOption />
                <CardOption />
            </div>
            <div className={styles.priceline}>
                <h2>Total</h2>
                <h2 className={styles.price}>R$99,99</h2>
            </div>
        </div>
    )
}