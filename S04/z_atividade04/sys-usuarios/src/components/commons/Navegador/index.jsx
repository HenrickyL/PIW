import './index.css'
import classNames from 'classnames'
export const Link = (props)=>{
    const nameClass = classNames('link-navegador',{'active':props.className})
    return (
        <a className={nameClass}
            href={props.href}>
                { props.profile && <img className='profile' height='5px' src="profile.png" alt="User" />}
                {props.linkTexto}
        </a>
    )
}


export function Navegador(props){
    
    return (
        <nav className='navegador'>
            <Link className='active' href='' linkTexto='Linha do tempo' />
            <Link  href='' linkTexto='Postar' />
            <Link  href='' profile={true} linkTexto='Henricky' />


        </nav>
    )
}