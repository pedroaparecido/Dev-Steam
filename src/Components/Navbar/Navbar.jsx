import styles from './Navbar.module.css'
import { BsCart4 } from 'react-icons/bs'

import Logo from '@/Components/logo/logo'
import Input from '../forms/input/input'
import CardButton from '../forms/cardButton/cardButton'

export default function Navbar({ card, onRemove }) {
    return(
        <div className={styles.navbar}>
            <Logo />
            <div className={styles.search}>
                <Input type="text" placeholder="Buscar" fullwidth />
            </div>
            <CardButton
                card={card}
                onRemove={onRemove}
            />
        </div>
    )
}