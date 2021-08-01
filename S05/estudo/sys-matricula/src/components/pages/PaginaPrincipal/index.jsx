import { Cabecalho } from '../../commons/Cabecalho'
import Navegador from '../../commons/Navegador'
import Conteudo from '../../pages/Conteudo'
import './index.css'



export default ()=>{


    return (
        <>
            <Cabecalho paginaAtual='página da matricula' />
            <Navegador />
            <Conteudo /> 
        </>
    )
}