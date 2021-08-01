import {useState} from 'react'
import { Navegador } from "../../components/commons/Navegador";
import './index.css'

import classNames from 'classnames'
import { LinhaDoTempo } from '../../components/LinhaDoTempo';
import Cabecalho from '../../components/Cabecalho'


export function PaginaFeed(){
    return(
        <div className='home '>
            <Cabecalho />
            <LinhaDoTempo  />
            
        </div>
    )
}