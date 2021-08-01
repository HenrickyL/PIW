import {fruit} from '../../utils/fruitData'
import { Navegador } from '../commons/Navegador'
const Cabecalho = (props)=>{
    const currentFruit = fruit[Math.floor(Math.random()*fruit.length)]
    let logo = 'logo.png'
    
    return (
        <>
            <header className='cabecalho'>
                <img className='logo' src={logo}
                    alt="Logo" />
                <img className='fruit' src={currentFruit}
                    alt="Logo" />
                <div className='header-content'>
                    <Navegador />

                </div>
            </header>


        </>
)}
export default Cabecalho