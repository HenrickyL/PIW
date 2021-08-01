import './index.css'
import classNames from 'classnames'
import {NavLink} from 'react-router-dom'
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


export function Navegador(props){
    
    return (
        <nav className='navegador'>
            <MeuLink  to='/' linkTexto='Linha do tempo' />
            <MeuLink  to='/postar' linkTexto='Postar' />
            <MeuLink  to='/user' profile={true} linkTexto='Henricky' />


        </nav>
    )
}