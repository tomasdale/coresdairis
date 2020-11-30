import React from 'react';
import Button from './Button/Button';
import Header from './Header/Header';

import styles from './Menu.module.css';

function Menu() {
    return (
        <div>
            <Header></Header>
            <div className={styles.menuLayer}>
                <Button text="Home" path="/" />
                <Button text="Massagem" path="/massagem" />
                <Button text="Contato" path="#contato" />
            </div>
        </div>
    )
}

export default Menu;