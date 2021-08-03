import './style.css'
import history from '../../history.js'
import {infoPosts} from'../../utils/data.js'
import {useState} from 'react'
export const FormPostar = (props)=>{
    const [conteudo, setConteudo] =useState('')
    const haddleSubmit =  (e)=>{
        history.push('/')

        infoPosts.push({
            id:infoPosts.length+1,
            nomeUsuario:"Henricky",
            texto: conteudo,
            qtdLikes:0
        })
    }
    const handdleChange = (e)=>{
        setConteudo(e.target.value)
    }
    
    return(
        
        <form className='formPostar fadeIn' onSubmit={(e)=>{e.preventDefault()}}>
            <textarea  onChange={handdleChange} autoFocus required   placeholder='Escreva seu Post aqui...' />
            <button onClick={haddleSubmit} type="submit">Postar</button>
        </form>
    )
}