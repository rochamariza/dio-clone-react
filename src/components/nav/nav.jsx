import React from 'react';
import logo from '../../assets/imgs/logo-dio 1.png'
import styles from './nav.module.css'
import { useAuth } from '../../context/auth';
export const Nav = () => {
    const {autenticado} = useAuth()
    return (
        <>
            {autenticado ? (<>
                    <div className={styles["container"]}>
                        <img src={logo} className={styles["logo"]}/>
                    </div>
                </>): (
                        <>
                            <div className={styles["container"]}>
                                <img src={logo} className={styles["logo"]}/>
                                <div className={styles["nav-btns"]}>
                                    <a href="/" className={styles["primary-btn"]}>Home</a>
                                    <a href="/login" className={styles["secondary-btn"]}>Login</a>
                                    <a href="/cadastro" className={styles["secondary-btn"]}>Cadastro</a>
                                </div>
                            </div>
                        </>
                    )
            }
        </>
    );
};
