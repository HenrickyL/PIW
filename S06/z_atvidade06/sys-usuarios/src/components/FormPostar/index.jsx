import './style.css'
import history from '../../history.js'
import {infoPosts} from'../../utils/data.js'
import {useContext, useState} from 'react'
import postsAPI from '../../api/postsAPI'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../App'
export const FormPostar = (props)=>{
    const {auth} = useContext(AuthContext)
    const {register, handleSubmit} = useForm();
    const [conteudo, setConteudo] =useState('')
    const submeter =  (data)=>{
        postsAPI.setPost(auth,{
            texto: conteudo,
            likes:0
        }).then(res=>{
            history.push('/')
        }).catch(e=>{
            console.error(e)
        })
    }
    const handdleChange = ({target})=>{
        
        setConteudo(target.value)
    }
    
    return(
        
        <form className='formPostar fadeIn'  onSubmit={handleSubmit(submeter)} >
            {/* <textarea  onChange={handdleChange}  name='texto' id='texto' autoFocus required    placeholder='Escreva seu Post aqui...' {...register("texto")}  /> */}
            <input className='inpt-text' type="text" onChange={handdleChange} />
            <button>Postar</button>
        </form>
    )
}