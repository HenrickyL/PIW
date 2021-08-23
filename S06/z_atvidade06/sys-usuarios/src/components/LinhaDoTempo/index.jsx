import { Post } from "../Post"
import './index.css'


export function LinhaDoTempo(props){
    

    return(
        <div className='conteudo fadeIn'>
            {
               (props.posts).map((currentPost,i)=>{
                    return (<Post className='fadeIn' key={i} {...currentPost} />)
               }) 
            }
        </div>
    )
}