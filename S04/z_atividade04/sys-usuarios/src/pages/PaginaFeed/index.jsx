import {useState} from 'react'
import { Navegador } from "../../components/commons/Navegador";
import './index.css'
import {fruit} from '../../utils/fruitData'
import classNames from 'classnames'
import { LinhaDoTempo } from '../../components/LinhaDoTempo';

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

export function PaginaFeed(){
    return(
        <div className='home fadeIn'>
            <Cabecalho />
            <LinhaDoTempo  />
        </div>
    )
}