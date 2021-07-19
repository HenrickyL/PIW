import './index.css'




export default ()=>{
    const Link = (props)=>(
        <a className='link-navegador' href={props.href}>{props.linkTexto}</a>

    )
    
    return(
        <nav className='navegador'>
            <Link href="" linkTexto='Link 1'/>
            <Link href="" linkTexto='Link 2'/>
            <Link href="" linkTexto='Link 3'/>
            
        </nav>
    )
    }