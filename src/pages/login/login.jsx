import {Nav} from "../../components/nav/nav";
import styles from "./login.module.css"

export const Login = () =>{
    return (
        <>
            <Nav />
            <div className={styles["login-container"]}>
                <h1>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h1>
                <div className={styles["login-form"]}>
                    <h1>Faça seu cadastro</h1>
                </div>
            </div>
        </>
    )
}