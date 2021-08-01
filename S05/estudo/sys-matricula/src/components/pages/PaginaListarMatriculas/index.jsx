import { Cabecalho } from "../../commons/Cabecalho"
import Navegador from "../../commons/Navegador"

export default ()=>{
    return (
        <div>
            <Cabecalho paginaAtual='página da matricula' />
            <Navegador />
            <h2>Pagina de matricula</h2>
        </div>
    )
}