import Navegador from '../../commons/Navegador'
import Conteudo from '../../pages/Conteudo'
import './index.css'

const Cabecalho = (props)=>(
    <header className='cabecalho'>
      <h1 className='logo'>Matricula UFC Quixadá</h1>
      <span className='pagina-atual'>Você está na {props.paginaAtual}</span>
    </header>
  
)

export default ()=>{


    return (
        <>
            <Cabecalho paginaAtual='página da matricula' />
            <Navegador />
            <Conteudo /> 
        </>
    )
}