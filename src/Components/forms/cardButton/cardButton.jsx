import CardMenu from '@/Components/cards/cardMenu/cardMenu'
import styles from './cardButton.module.css'
import { BsCart4 } from 'react-icons/bs'
import { useState } from 'react'

export default function CardButton() {
    const [open, setOpen] = useState(false)

    return(
        <div>
            <BsCart4 className={styles.icon} size={40} onClick={() => setOpen(!open)} />
            
            { open && <CardMenu /> }
        </div>
    )
}