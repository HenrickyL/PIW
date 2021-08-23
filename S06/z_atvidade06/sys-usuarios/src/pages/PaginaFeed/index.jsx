import {useContext, useEffect, useState} from 'react'
import { Navegador } from "../../components/commons/Navegador";
import './index.css'

import classNames from 'classnames'
import { LinhaDoTempo } from '../../components/LinhaDoTempo';
import Cabecalho from '../../components/Cabecalho'
import postsAPI from '../../api/postsAPI.js';
import { AuthContext } from '../../App';

export function PaginaFeed(){
    const {auth} = useContext(AuthContext)
    const [posts,setPosts] = useState([])
    const [changed,setChanged] = useState(false)


    useEffect(()=>{

        postsAPI.listar(auth.token).then(res=>{
            setPosts(res)
            console.log(res)

        }).catch(e=>{
            console.error(e)

        })

    },[changed])
    return(
        <div className='home ' >
            <Cabecalho />
            <LinhaDoTempo userName={auth.nome} posts={posts} />
            
        </div>
    )
}