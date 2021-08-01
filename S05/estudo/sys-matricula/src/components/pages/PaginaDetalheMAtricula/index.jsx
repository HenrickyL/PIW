import { Cabecalho } from "../../commons/Cabecalho"
import Navegador from "../../commons/Navegador"

export const PaginaDetalhesMatriculas=(props)=>{
    return (
        <>
            <Cabecalho />
            <Navegador />
            <h1>Detalhes </h1>
            <p>Aqui mostra as informações da matricula 
                {props.match.params.id}
            </p>

        </>
    )
}