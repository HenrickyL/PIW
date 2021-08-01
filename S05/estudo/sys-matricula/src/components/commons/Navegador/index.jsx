import './index.css'
import {NavLink} from 'react-router-dom'



export default ()=>{
    const MeuLink = (props)=>(
        <NavLink exact className='link-navegador' to={props.to}>{props.linkTexto}</NavLink>

    )
    
    return(
        <nav className='navegador'>
            <MeuLink to="/" linkTexto='Home'/>
            <MeuLink to="/alunos" linkTexto='Link 2'/>
            <MeuLink to="/matriculas" linkTexto='Listar Matriculas'/>
            
        </nav>
    )
    }