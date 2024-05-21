import styles from './cardMenu.module.css'

import CardOption from '@/Components/cardOption/cardOption'

export default function CardMenu({ card, onRemove }) {
    return(
        <div className={styles.menu}>
            <div className={styles.options}>
                {
                    card.lenght === 0 && <p>Nenhum produto no seu carrinho</p>
                }
                {
                    card.map((cardInfo, pos) => 
                        <CardOption
                            image={cardInfo.image}
                            title={cardInfo.name}
                            price={cardInfo.price}
                            onRemove={() => onRemove(pos)}
                            key={`cart-info-${pos}`}
                        />
                    )
                }
            </div>
            <div className={styles.priceline}>
                <h2>Total</h2>
                <h2 className={styles.price}>R$ {card.reduce((prev, current) => prev + current.price, 0).toFixed(2)}</h2>
            </div>
        </div>
    )
}