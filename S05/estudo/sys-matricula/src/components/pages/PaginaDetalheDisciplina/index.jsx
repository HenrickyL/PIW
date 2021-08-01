import { Cabecalho } from "../../commons/Cabecalho"
import Navegador from "../../commons/Navegador"

export const PaginaDetalheDisciplina= (props)=>{


    return(
        <>
            <Cabecalho />
            <Navegador />
            <h1>Detalhe disciplinas</h1>
            <p>{props.match.params.id}</p>
        </>
    )

}