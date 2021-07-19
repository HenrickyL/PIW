import { Post } from "../Post"
import './index.css'
const infoPosts = [
    {
        id:1,
        nomeUsuario:"Henricky",
        texto:"Será que ficou bonito? ou está demais? kkkk",
        qtdLikes:5
    },
    {
        id:2,
        nomeUsuario:"João",
        texto:"Menino, tá quente demais hoje",
        qtdLikes:1
    },
    {
        id:3,
        nomeUsuario:"Tiago",
        texto:"Num aguento mais essa quintura",
        qtdLikes:3
    },
    {
        id:3,
        nomeUsuario:"Pedrosa",
        texto:"Dá refresh na página!!! Olha o que acontece.",
        qtdLikes:3
    },
    
    {
        id:4,
        nomeUsuario:"Mateus",
        texto:"Terminou o tabalho? Bora jogar",
        qtdLikes:8
    },
    {
        id:5,
        nomeUsuario:"Victor",
        texto:"Terminou ai velho?",
        qtdLikes:4
    },
    
    ]

export function LinhaDoTempo(){
    

    return(
        <div className='time-line'>
            {
               infoPosts.map((p,i)=>{
                    return (<Post className='fadeIn' key={i} {...p} />)
               }) 
            }
        </div>
    )
}