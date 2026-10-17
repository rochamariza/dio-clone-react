import {Nav} from "../../components/nav/nav";
import {HomeNaoAutenticado} from "../../components/home-nao-autenticado/home-nao-autenticado";

export const Home = () =>{
    return (
        <>
            <Nav />
            <HomeNaoAutenticado />
        </>
    )
}