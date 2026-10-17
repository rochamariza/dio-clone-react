import React from 'react';
import logo from '../../assets/imgs/logo-dio 1.png'
import styles from './nav.module.css'

export const Nav = () => {
    return (
        <div className={styles["container"]}>
            <img src={logo} className={styles["logo"]}/>
            <div className={styles["nav-btns"]}>
                <a href="/" className={styles["primary-btn"]}>Home</a>
                <a href="/login" className={styles["secondary-btn"]}>Login</a>
                <a href="/cadastro" className={styles["secondary-btn"]}>Cadastro</a>
            </div>
        </div>
    );
};
