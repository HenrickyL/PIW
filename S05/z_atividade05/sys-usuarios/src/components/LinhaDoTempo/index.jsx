import { infoPosts } from "../../utils/data"
import { Post } from "../Post"
import './index.css'


export function LinhaDoTempo(){
    

    return(
        <div className='conteudo fadeIn'>
            {
               infoPosts.map((p,i)=>{
                    return (<Post className='fadeIn' key={i} {...p} />)
               }) 
            }
        </div>
    )
}