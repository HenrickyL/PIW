import './index.css'
import classNames from 'classnames'
import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import { AuthContext } from '../../../App'

export const MeuLink = (props)=>{
    const nameClass = classNames('link-navegador')
    return (
        <NavLink exact className={nameClass}
            to={props.to}  onClick={(e)=>{if(props.profile) e.preventDefault()}}>
                { props.profile && <img className='profile' height='5px' src="profile.png" alt="User" />}
                {props.linkTexto}
           
        </NavLink>
    )
}

const NavegadorLogado = (props)=>{
    return ( 
    <nav className='navegador'>
        <MeuLink  to='/logout' linkTexto='Logout' />
        <MeuLink  to='/' linkTexto='Linha do tempo' />
        <MeuLink  to='/postar' linkTexto='Postar' />
        <MeuLink  to='/user' profile={true} linkTexto={props.nome} />
    </nav>
)
}
const NavegadorNaoLogado = (props)=>{
    return(
        <nav className='navegador'>
            <MeuLink  to='/cadastrar' linkTexto='Cadastrar' />
            <MeuLink  to='/login' linkTexto='Login' />
        </nav>
    )
}


export function Navegador(props){
    const {auth,setAuth} = useContext(AuthContext)
    return (
        auth.token!=null?
            <NavegadorLogado nome={auth.nome}/>
            :
            <NavegadorNaoLogado />
    )
}