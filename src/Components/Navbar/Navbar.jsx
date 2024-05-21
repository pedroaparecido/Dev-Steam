import styles from './Navbar.module.css'
import { BsCart4 } from 'react-icons/bs'

import Logo from '@/Components/logo/logo'
import Input from '../forms/input/input'

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <Logo />
            <div className={styles.search}>
                <Input type="text" placeholder="Buscar" fullwidth />
            </div>
            <BsCart4 size={40} />
        </div>
    )
}