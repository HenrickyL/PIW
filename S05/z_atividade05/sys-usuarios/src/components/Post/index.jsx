import './index.css'
import {useState} from 'react'
import classNames from 'classnames' 
import { infoComments } from '../../utils/data'
import { Comment } from '../Comment'
export function Post(props){
    const [likes,setLikes]=useState(props.qtdLikes)
    const [viewComment,setView]=useState(false)
    const [deactive,setDeactive]=useState(null)
    const [isLike,setISLike]=useState(props.active)
    


    
    const handdleClick = (e)=>{
        let aux = 1;
        if(isLike){
            aux=-1;
        }else{
            aux=1;
        }
        setLikes(likes+aux)
        setISLike(!isLike)

    }
    const toggleComments = (e)=>{
        if(deactive==null){
            setDeactive(false)
        }else{
            setDeactive(!deactive)
        }
        setView(!viewComment)
    }
    return (
        <div className={classNames('post post-main',{active:viewComment},{deactive:deactive})}>
            <div className='post hide'>
                <h4 className='post-user'>{props.nomeUsuario}</h4>
                <span className='post-comment'>{props.texto}</span>
                <span className='post-like'>{likes} likes</span>
                <button className={classNames('btLike',{active:isLike})} onClick={handdleClick}>Curtir</button>
                <img className={classNames({active:viewComment})} src="/seta.svg" alt="view comments" onClick={toggleComments} />
            </div>
           <div className='comentarios'>
               {
                    infoComments.map((c,i)=>{
                        console.log(c)
                                return (<Comment  key={i} {...c} />)
                        })
               }
           </div>
            <form className='inp-mensage' onSubmit={(e)=>{e.preventDefault()}}>

                <textarea placeholder='Digite um Comentário ...'/>
            </form>
        </div>
        
    )
}